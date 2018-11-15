var gulp = require('gulp');
var jsminify = require('gulp-minify');
var concat = require('gulp-concat');
var cssminify = require('gulp-clean-css');

gulp.task('release-js', function () {
    return gulp.src(['src/*.js', 'src/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(jsminify())
        .pipe(gulp.dest('src'))
});

gulp.task('release-css', () => {
    return gulp.src(['src/*.css', 'src/**/*.css'])
        .pipe(concat('all.css'))
        .pipe(cssminify({compatibility: 'ie8'}))
        .pipe(gulp.dest('src'));
});