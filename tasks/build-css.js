/*******************************
          Build Task
*******************************/

var config = require('./config'),
    gulp = require('gulp'),
    // node dependencies
    fs = require('fs'),
    // gulp dependencies
    sass = require('gulp-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
    // gulpif = require('gulp-if'),
    // minifyCSS = require('gulp-clean-css'),
    // rename = require('gulp-rename'),
    replace = require('gulp-replace');

module.exports = function (callback) {

    console.info('Building CSS');

    // var steam = gulp.src(config.paths.css.src)
    //     .pipe(sass())
    //     .pipe(gulp.dest(config.paths.css.dist))
    //     ;
    // return steam;

    return gulp.src(config.paths.css.src)
        .pipe(sass())
        .pipe(gulp.dest(config.paths.css.dist));
}