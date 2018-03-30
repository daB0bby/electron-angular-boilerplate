const webpackMerge         = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig         = require('./webpack.common.js');
const helpers              = require('./helpers');


module.exports = webpackMerge(commonConfig, {
  mode: 'development',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],

  target: 'electron-renderer'

});
