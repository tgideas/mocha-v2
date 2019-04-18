/*******************************
          Build Task
*******************************/

var config = require('./config'),
    gulp = require('gulp'),
    // node dependencies
    fs = require('fs'),
    // gulp dependencies
    sass = require('gulp-sass'),
    purge = require('gulp-css-purge'),
    clone = require('gulp-clone'),
    concat = require('gulp-concat'),
    // autoprefixer = require('gulp-autoprefixer'),
    // gulpif = require('gulp-if'),
    minifyCSS = require('gulp-clean-css'),
    // rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    es = require('event-stream');

module.exports = function (callback) {

    console.info('[Mocha UI Automation]Building CSS');

    // var steam = gulp.src(config.paths.css.src)
    //     .pipe(sass())
    //     .pipe(gulp.dest(config.paths.css.dist))
    //     ;
    // return steam;

    var cssNormal = gulp.src(config.paths.css.src)
        .pipe(sass())
        .pipe(gulp.dest(config.paths.css.dist));

    var cssMin = gulp.src(config.paths.css.src)
        .pipe(sass())
        .pipe(purge())
        .pipe(minifyCSS())
        .pipe(concat(config.paths.css.mochaMin))
        .pipe(gulp.dest(config.paths.css.dist));

    // return es.merge(cssNormal, cssMin);
    return cssNormal;
    return cssMin;
}