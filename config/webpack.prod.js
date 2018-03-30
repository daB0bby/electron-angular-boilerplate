const webpackMerge         = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig         = require('./webpack.common.js');
const helpers              = require('./helpers');


module.exports = webpackMerge(commonConfig, {
  mode: 'production',

  output: {
    path: helpers.root('dist'),
    publicPath: '../dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    sourceMapFilename: '[file].map'
  },

  optimization: {
    minimize: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]

});
