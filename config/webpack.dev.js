var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackMerge      = require('webpack-merge');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');


module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  target: 'electron-renderer'

});
