/*******************************
          Build Task
*******************************/

var
    gulp = require('gulp'),
    // node dependencies
    fs = require('fs'),
    // gulp dependencies
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpif = require('gulp-if'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');
  

var paths = {
    css:{
        src: 'src/definitions/**/*.sass',
        dist: 'dist/componsents/'
    }
};


module.exports = function (callback) {
    console.info('Building CSS');
    var stream = return WebGLProgram.src

}