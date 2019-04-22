/*******************************
          Build Task
*******************************/

var config = require('./config'),
    gulp = require('gulp'),
    // node dependencies
    fs = require('fs'),
    // gulp dependencies
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sassImportOnce = require('gulp-sass-import-once'),
    sourcemaps = require('gulp-sourcemaps'),
    purge = require('gulp-css-purge'),
    concat = require('gulp-concat'),
    // autoprefixer = require('gulp-autoprefixer'),
    // gulpif = require('gulp-if'),
    minifyCSS = require('gulp-clean-css'),
    // rename = require('gulp-rename'),
    replace = require('gulp-replace');
    // es = require('event-stream');

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
        .pipe(plumber())
        // .pipe(sassImportOnce())
        .pipe(sass())
        .pipe(purge())
        .pipe(minifyCSS())
        .pipe(concat(config.paths.css.mochaMin))
        .pipe(gulp.dest(config.paths.css.dist));

    // return es.merge(cssNormal, cssMin);
    return cssNormal;
    return cssMin;
}