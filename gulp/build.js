var gulp = require('gulp');
var conf = require('../gulpfile.config.json');
var glob = require('glob');
var runSequence = require('run-sequence');
var browserifyBuild = require('ionic-gulp-browserify-typescript');
var _ = require('lodash');

var argv = process.argv;
var isRelease = argv.indexOf('--release') > -1;

gulp.task('build', ['clean'], function(done) {
    var tsFiles = glob.sync(conf.paths.ts);

    _.forEach(tsFiles, function(value) {
        conf.paths.src.push(value);
    });

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