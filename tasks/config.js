/*******************************
*  Config Paths
*******************************/
module.exports = {
    //  Paths
    paths: {
        clean : ['dist/components/**','!dist/components','!dist/components/README.md'],
        css:{
            src: 'src/definitions/**/*.scss',
            dist: 'dist/components/',
            mochaMin: 'mocha.min.css'
        }
    }
};