var gulp = require('gulp');
var runSequence = require('run-sequence');
var gulpWatch = require('gulp-watch');
var browserifyBuild = require('ionic-gulp-browserify-typescript');
var tslint = require('ionic-gulp-tslint');

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

gulp.task('lint', tslint);