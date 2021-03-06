var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sh = require('shelljs');
var del = require('del');
var copyHTML = require('ionic-gulp-html-copy');
var requireDir = require('require-dir');
var gulpTask = requireDir('./gulp');

gulp.task('serve:before', ['watch']);

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('html', function() {
    return copyHTML({ dest: 'www' });
});

gulp.task('clean', function() {
    return del(['www/css', 'www/pages', 'www/js']);
});