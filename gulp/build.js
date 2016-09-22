var gulp = require('gulp');
var conf = require('../gulpfile.config.json');
var glob = require('glob');
var runSequence = require('run-sequence');
var browserifyBuild = require('ionic-gulp-browserify-typescript');

var argv = process.argv;
var isRelease = argv.indexOf('--release') > -1;

gulp.task('build', function(done) {
    conf.paths.src.push(glob.sync(conf.paths.ts));
    conf.paths.src.push(glob.sync(conf.paths.tsd));

    runSequence(
        ['sass', 'html'],
        function() {
            browserifyBuild({
                src: conf.paths.src,
                minify: isRelease,
                browserifyOptions: {
                    debug: !isRelease
                },
                uglifyOptions: {
                    mangle: false
                },
                outputPath: 'www/js',
                outputFile: 'app.bundle.js'
            }).on('end', done);
        }
    );
});