'use strict';
var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shell = require('gulp-shell')
var livereload = require('gulp-livereload');

gulp.task('js', function(){
  browserify('./assets/js/app.js')
    .transform("babelify", {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(livereload());
});


var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(autoprefixer({ browsers: ['ie 9', 'last 2 versions'], cascade: false }))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch("assets/js/**/*.js", ["js"]);
  gulp.watch("assets/scss/**/*.scss", ["sass"])
})


gulp.task('default', ['js', 'sass', 'watch']);
