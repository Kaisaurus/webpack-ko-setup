const webpack = require('webpack');
const path = require('path');
// const is the new syntax for a var that doesn't change
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    app: path.join(__dirname, 'src/js', 'app.js'),
    about: path.join(__dirname, 'src/js', 'about.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          // resolves any url() stuff in the css
          'sass-loader?sourceMap',
          // ?sourceMap is needed because we are useing resolve url before
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        include: path.resolve(__dirname, 'src/js'),
      },
    ],
  },


  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
    hot: true,
    stats: 'errors-only',
  },

  devtool: 'cheap-module-eval-source-map',
  // this makes js errors a bit more readable in the browser developer tools
  // however there is some speed loss in the building

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html', 'index.html'),
      filename: 'index.html', // not really needed because index is default
      hash: true,
      chunks: ['app'],
      inject: 'head',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html', 'index.html'),
      filename: 'about.html',
      hash: true,
      chunks: ['about'],
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],

};
