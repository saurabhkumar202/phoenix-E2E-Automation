import * as fs from "fs";
import * as request from "request";
import * as adm from "adm-zip"
import * as freeport from "freeport";
import * as childProcess from "child_process";
import * as path from"path";
import * as q from "q";
import {Response} from "request";
import {Stats} from "fs";


var version :any= '2.1.2';
var relPath :string= './';
var randomPort :number= null;

export class ProxySetup{

    public killAlreadyRunningBMPInstance() {

        var deferred = q.defer();
        console.log("Kill Already running BMP instance ...");
        var command :string= /^win/.test(process.platform)
            ? "wmic Path win32_process Where \"CommandLine Like '%browsermob-proxy%'\" Call Terminate"
            : "ps -ef | grep [browser]mob-proxy | awk '{print $2;}' | xargs -r kill";

        childProcess.exec(command,  function (err:Error, stdout:string, stderr:string) {
            console.log(err || stdout || stderr);
            deferred.resolve();
        });

        return deferred.promise;
    }

    public downloadBMP(cb:Function) {
        var that=this;
        console.log("Downloading BMP server...");
        request.get('https://github.com/lightbody/browsermob-proxy/releases/download/browsermob-proxy-' + version + '/browsermob-proxy-' + version + '-bin.zip',
            function (err:any, resp:Response, body:any) {
                if (!err) {
                    if (resp.statusCode === 200) {
                        that.checkFileStatus(cb);
                    } else {
                        console.log("Something is wrong with the URL , returned response ", resp.statusCode);
                    }
                } else {
                    console.log("Request error -> ", err);
                }
            }).pipe(fs.createWriteStream(relPath + 'browsermob-proxy-' + version + '.zip'));
    }

    public checkFileStatus(cb:Function) {
        var that=this;
        fs.stat(relPath + 'browsermob-proxy-' + version + '.zip', function (fserr:NodeJS.ErrnoException, stats:Stats) {
            if (!fserr) {
                if (stats['size'] < 1000) {
                    console.log("Zip file is corrupt");
                } else {
                    that.extractZip(cb);
                }
            } else {
                console.log("Zip file doesn't exists -> ", fserr);
            }
        });
    }

    public extractZip(cb:Function) {
        console.log("Extracting the zip file...");
        var zip = new adm(relPath + 'browsermob-proxy-' + version + '.zip');
        zip.extractAllTo(relPath);

        this.getFreePort(cb);
    }

    public getFreePort(cb:Function) {
        var that=this;
        freeport(function (porterr:Error, availRandomport:number) {
            if (!porterr) {
                randomPort = availRandomport;
                console.log("Found free port ", randomPort, " to run BMP server");
                that.spawnBMPServerProcess(cb);
            } else {
                console.log('Problem fetching freeport -> ', porterr);
            }
        });
    }

    public spawnBMPServerProcess(cb:Function) {

        // console.log(path.win32.resolve(relPath + '\\browsermob-proxy-' + version + '\\bin\\browsermob-proxy'));
        var spawnOptions:any = /^win/.test(process.platform) ? ['/c', path.win32.resolve(relPath + '\\browsermob-proxy-' + version + '\\bin\\browsermob-proxy'), '-port', randomPort]
            : [path.resolve(relPath + '/browsermob-proxy-' + version + '/bin/browsermob-proxy'), '-port', randomPort];
        var spawnCmd = /^win/.test(process.platform) ? 'cmd' : 'sh';

        var child:any = childProcess.spawn(spawnCmd, spawnOptions);
        var exitFn = function () {
            console.log('something caused bmp server to stop');
        };

        child.stdout.on('data', function (data:any) {
            var startedString = 'Started SelectChannelConnector';
            if (data.toString().indexOf(startedString) != -1) {
                child.removeListener('exit', exitFn);
                console.log(data.toString());
                child.port = randomPort;
                child.host = '127.0.0.1';
                cb(null, child);
            } else {
                console.log(data.toString());
            }
        });

        child.on('exit', exitFn);
        child.on('close', function () {
            console.log('closed');
        });
    }


   public proxySetup (cb:Function) {

        var dirPath = /^win/.test(process.platform) ? path.win32.resolve(relPath + '\\browsermob-proxy-' + version + '\\lib\\browsermob-dist-' + version + '.jar') :
            path.resolve(relPath + '/browsermob-proxy-' + version + '/lib/browsermob-dist-' + version + '.jar');
var that=this;
        fs.stat(dirPath, function (fserr:NodeJS.ErrnoException, stats:Stats) {
            that.killAlreadyRunningBMPInstance().then(function () {
                if (!fserr && stats['size'] > 10000) {
                   that. getFreePort(cb);
                } else {
                    that.downloadBMP(cb);
                }
            });
        });
    };

}
