/**
 * TEST WEBPACK CONFIGURATION
 */

/* const path = require('path');*/
/* const webpack = require('webpack');*/

module.exports = {
  resolve: {
    /* alias: options.alias,*/
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],
  },
};
