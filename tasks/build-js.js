/*******************************
* Build CSS Task
*******************************/
var config = require('./config'),
    gulp = require('gulp'),
    fs = require('fs'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

module.exports = function (callback) {
    console.info('[Mocha UI Automation]Building JS.');

    mochaJsMin = gulp.src(config.paths.js.src)
        .pipe(plumber())
        .pipe(uglify(config.setting.uglify))
        .pipe(rename(config.setting.rename.jsMin))
        .pipe(gulp.dest(config.paths.js.dist))

    mochaPluginJs = gulp.src(config.paths.js.plugin)
        .pipe(plumber())
        .pipe(gulp.dest(config.paths.js.dist))
    
    return mochaJsMin;
    return mochaPluginJs
};