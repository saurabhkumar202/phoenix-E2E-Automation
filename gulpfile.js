var gulp = require('gulp');
var spawn = require('child_process').spawn;

var runSpawn = function(done, task, opt_arg, opt_io) {
    opt_arg = typeof opt_arg !== 'undefined' ? opt_arg : [];
    var stdio = 'inherit';
    if (opt_io === 'ignore') {
        stdio = 'ignore';
    }
    var child = spawn(task, opt_arg, {stdio: stdio});
    var running = false;
    child.on('close', function() {
        if (!running) {
            running = true;
            done();
        }
    });
    child.on('error', function() {
        if (!running) {
            console.error('gulp encountered a child error');
            running = true;
            done();
        }
    });
};
gulp.task('build:config', function (done) {
 runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','conf.ts']);
});
gulp.task('build:pages', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/ptcu/phoenix/pages/tsconfig.json']);
});
gulp.task('build:step_definitions', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/ptcu/phoenix/step_definitions/tsconfig.json']);
});
gulp.task('build:utils', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/ptcu/phoenix/utils/tsconfig.json']);
});

gulp.task('build:support', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/ptcu/phoenix/features/support/tsconfig.json']);
});
gulp.task('build', ['build:pages', 'build:config','build:support','build:utils','build:step_definitions']);
gulp.task('test',function(done){
    runSpawn(done, 'node', ['./node_modules/protractor/bin/protractor', 'conf.js']);
});
gulp.task('watch', function () {
    gulp.watch('**/*.ts', ['build:pages', 'build:config','build:support','build:utils','build:step_definitions']);
});

gulp.task('default', ['watch']);