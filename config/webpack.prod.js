var webpack           = require('webpack');
var webpackMerge      = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig      = require('./webpack.common.js');
var helpers           = require('./helpers');


// Set production variable
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


module.exports = webpackMerge(commonConfig, {
  devtool: 'nosources-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '../dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
    sourceMapFilename: '[file].map'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]

});
