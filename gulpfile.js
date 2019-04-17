/*******************************
* MochaUI Gulp Config
* Set-up
*******************************/


var gulp = require('gulp-help')(require('gulp')),
    clean = require('./tasks/clean'),
    // build all files
    buildJS = require('./tasks/build-js'),
    buildCSS = require('./tasks/build-css'),
    buildAssets = require('./tasks/build-assets')
;


/*******************************
* Tasks
*******************************/
gulp.task('clean', 'Clean dist folder', clean);
gulp.task('build-css', 'Builds all css from source', buildCSS);
gulp.task('build-js', 'Builds all javascript from source', buildJS);
// gulp.task('build-assets', 'Copies all assets from source', buildAssets);
// gulp.task('build', 'Builds all files from source', build);