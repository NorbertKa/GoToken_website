'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat')
 
gulp.task('sass', function () {
  return gulp.src('./GoToken/src/scss/base.scss')
    .pipe(sass({outputStyle: 'compressed',includePaths: ['node_modules/susy/sass','node_modules/typesettings']}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./GoToken/static'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./GoToken/src/scss/**/*.scss', ['sass']);
});