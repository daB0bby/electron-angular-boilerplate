var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers           = require('./helpers');

module.exports = {

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [

      // TypeScript
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      // Templates
      {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },

      // Assets
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[ext]'
      },

      // Styles
      {
        test: /\.scss$/,
        loaders: ["raw-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
};
