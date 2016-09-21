var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var gulpWatch = require('gulp-watch');
var runSequence = require('run-sequence');
var argv = process.argv;
var glob = require('glob');

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var browserifyBuild = require('ionic-gulp-browserify-typescript');
var copyHTML = require('ionic-gulp-html-copy');
var tslint = require('ionic-gulp-tslint');

var isRelease = argv.indexOf('--release') > -1;

var paths = {
    sass: ['./scss/**/*.scss'],
    src: ['./app/app.ts', './typings/index.d.ts'],
    ts: './app/**/*.ts'
};

gulp.task('default', ['build', 'watch']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function(done) {
    runSequence(
        ['sass', 'html'],
        function() {
            gulpWatch('app/**/*.scss', function() { gulp.start('sass'); });
            gulpWatch('app/**/*.html', function() { gulp.start('html'); });
            gulpWatch('app/**/*.ts', function() { gulp.start('lint'); });
            browserifyBuild({
                watch: true,
                outputPath: 'www/js',
                outputFile: 'app.bundle.js'
            }).on('end', done);
        }
    );
});

gulp.task('build', ['clean'], function(done) {
    paths.src.push(glob.sync(paths.ts));
    runSequence(
        ['sass', 'html'],
        function() {
            browserifyBuild({
                src: paths.src,
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
    return del(['www/pages', 'www/js']);
});

gulp.task('lint', tslint);