var del = require('del'),
    config = require('./config');
module.exports = function (callback) {
    console.log('[Mocha Gulp]del dist path...')
    return del(config.paths.clean, callback);
};