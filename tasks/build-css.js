/*******************************
* Build CSS Task
*******************************/
var config = require('./config'),
    gulp = require('gulp'),
    // node dependencies
    fs = require('fs'),
    // gulp dependencies
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    // rename = require('gulp-rename'),
    replace = require('gulp-replace');

module.exports = function (callback) {
    console.info('[Mocha UI Automation]Building CSS.');

    var cssNormal = gulp.src(config.paths.css.src)
        .pipe(sass())
        .pipe(gulp.dest(config.paths.css.dist));

    var cssMinPC = gulp.src(config.paths.css.srcPC)
        .pipe(plumber())
        .pipe(sass())
        .pipe(concat(config.paths.css.mochaPCmin))
        .pipe(cssnano())
        .pipe(gulp.dest(config.paths.css.dist));
    
    
    var cssMinM = gulp.src(config.paths.css.srcM)
        .pipe(plumber())
        .pipe(sass())
        .pipe(concat(config.paths.css.mochaMmin))
        .pipe(cssnano())
        .pipe(gulp.dest(config.paths.css.dist));
    
    // return es.merge(cssNormal, cssMin);
    return cssNormal;
    return cssMinPC;
    return cssMinM;
}