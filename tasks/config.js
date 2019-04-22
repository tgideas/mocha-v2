/*******************************
*  Config Paths
*******************************/
module.exports = {
    //  Paths
    paths: {
        clean : ['dist/components/**','!dist/components','!dist/components/README.md'],
        css:{
            src:  'src/definitions/**/*.scss',
            dist: 'dist/components/',
            mochaMin:   'mocha.min.css',
            srcPC:      ['src/definitions/comm/**/*.scss','src/definitions/pc/**/*.scss'],
            mochaPCmin: 'mocha.pc.min.css',
            srcM:       ['src/definitions/comm/**/*.scss','src/definitions/m/**/*.scss'],
            mochaMmin:  'mocha.m.min.css'
        },
        js: {
            plugin: [
                'src/definitions/comm/basic/js/mow.js'
            ],
            src: [
                'src/definitions/comm/basic/js/mocha.js',
                'src/definitions/m/basic/js/mocha.resize.js'
            ],
            dist: 'dist/components/',
            mochaMin: '.min.js'
        }
    },

    setting: {
        rename : {
            cssMin: { extname: ".min.css" },
            jsMin:  { extname: ".min.js" }
        },
        uglify: {
            mangle: true,
            output: { comments: 'some' } 
        }
    }
};