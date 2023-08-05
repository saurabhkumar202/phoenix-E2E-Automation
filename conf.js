"use strict";
exports.__esModule = true;
var Proxy = require('browsermob-proxy-api');
var Q = require("q");
var proxy;
var proxyPort;
var bmpServer;
var protractor_1 = require("protractor");
var crew = require('serenity-js/lib/stage_crew');
exports.config = {
    params: {
        URLOptions: {
            //Start of URLs for UAT env
            iotuURL: 'https://dev.ptcu.com/catalog',
            supportURL: 'https://support.ptc.com',
            PTCURL: 'https://www.ptc.com',
            forumURL: 'https://forum-uat.ptcu.com',
            enterpriseURL: 'https://enterprise-uat.ptcu.com',
            blogURL: 'https://blog.ptcu.com/'
            //Start of URLs for pacific env
            /*iotuURL:'https://pacific.ptcu.com',
            supportURL:'https://supporttest.ptc.com',
            PTCURL:'https://www.ptc.com',
            forumURL:'https://pacific-forum.ptcu.com/',
            enterpriseURL:'https://pacific-enterprise.ptcu.com',
            blogURL:'https://blog.ptcu.com/'*/
        },
        apiType: {
            IOTU_BROWSE: 'https:\/\/test.iotu.com\/.*',
            PTCU_BROWSE: ''
        },
        windowHandles: {
            PTCU: {
                handle: null
            },
            PTCUEnterprise: {
                handle: null
            },
            PTC: {
                handle: null
            },
            PTCSupport: {
                handle: null
            },
            Forum: {
                handle: null
            },
            Blog: {
                handle: null
            },
            SSO: {
                handle: null
            }
        }
    },
    directConnect: true,
    // seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar",
    //baseUrl: "https://iotu-dev.review.ptcusys.com",
    /*capabilities: {
        'browserName': 'chrome'
    },*/
    /* "For Multi browser support with Protractor
         directConnect: true,
         Update Mozilla firefox version >= 60.0" and use */
    /*multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'}
],*/
    getMultiCapabilities: function () {
        var deferred = Q.defer();
        var multiCapability = [{
                browserName: process.env.BROWSER || 'chrome'
            }];
        console.log('Resolved capability ', multiCapability);
        deferred.resolve(multiCapability);
        return deferred.promise;
    },
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),
    serenity: {
        requirementsDirectory: process.cwd() + "/com/ptcu/phoenix/features",
        crew: [
            crew.serenityBDDReporter(),
            // Everytime
            //crew.photographer(),
            // ONLY on Failures
            crew.Photographer.who(function (_) { return _
                .takesPhotosOf(_.Failures); })
        ],
        outputDirectory: process.cwd() + "/test_reports/"
        //dialect: 'cucumber'  // or 'mocha'
    },
    useAllAngular2AppRoots: true,
    specs: ['com/ptcu/phoenix/features/course Enrollment/course.enrollment.feature', 'com/ptcu/phoenix/features/Student/course.viewer.feature', 'com/ptcu/phoenix/features/Course Author/courseAuthor.feature', 'com/ptcu/phoenix/features/Site Admin/siteAdmin.feature', 'com/ptcu/phoenix/features/**/*.feature'],
    getPageTimeout: 30000000,
    allScriptsTimeout: 50000000,
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
        /* return browser.getProcessedConfig().then(function (config) {
             // console.log(config.capabilities);
             browser.params.proxy = config.capabilities.proxyApi;
             proxy = config.capabilities.proxyApi;
             browser.params.proxyPort = config.capabilities.proxyPort;
             proxyPort = config.capabilities.proxyPort;
             bmpServer = config.capabilities.bmp;
         });*/
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ['com/ptcu/phoenix/features/support/**/*.js', 'com/ptcu/phoenix/step_definitions/*.js'],
        tags: "~@skip",
        /*
        * Individual tag execution:
        * Option1: run protractor conf.js --cucumberOpts.tags="scenario1" --cucumberOpts.tags="scenario2"
        * Option2: cucumberOpts:{tags: '@scenario2,}                    Individual tag
        *          cucumberOpts:{tags: ('@scenario2, @scenario1')}      Logical AND
        *          cucumberOpts:{tags: ('@scenario2', '@scenario1')}    Logical OR
        * */
        // format: 'pretty',
        profile: false,
        'no-source': true
    },
    afterLaunch: function () {
        /* return Q.ninvoke(proxy, 'stopPort', proxyPort).then(function (resp) {
 
             if (/^win/.test(process.platform)) {
                 childProcess.exec('taskkill /PID ' + bmpServer.pid + ' /T /F', function (err, stdout, stderr) {
                     if (!err) {
                         console.log(stdout);
                     } else {
                         console.log(err);
                     }
                 });
             } else {
                 bmpServer.kill();
             }
         }, function (err) {
             console.log(err);
         });
 */
    }
};
