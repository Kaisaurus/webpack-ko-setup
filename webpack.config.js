const path = require('path');
const webpack = require('webpack');
// const is var in the ES2015 syntaxt

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          // ?sourceMap is needed because we are useing resolve url before
        ],
      },
    ]
  },


  devServer: {
    contentBase: path.resolve(__dirname, './'),
  },

};
