'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('sass', function () {
  return gulp.src('./app/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('./app'))
});

gulp.task('watch', function () {
  gulp.watch(['./app/sass/**/*.scss', './app/**/*.*'], ['nunjucks', 'sass']);
});