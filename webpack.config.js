/* eslint-disable */
'use strict';
/* eslint-enable */

let webpack = require('webpack');
let HTMLWebpackPlugin = require('html-webpack-plugin');
let autoprefixer = require('autoprefixer');
let path = require('path');

module.exports = {
  context: __dirname,
  plugins: [
    new webpack.SourceMapDevToolPlugin(
      '[file].map', null,
      '[absolute-resource-path]',
      '[absolute-resource-path]'
    ),
    new HTMLWebpackPlugin({
      title: 'Daryl Brendt Napp',
      template: 'index.ejs',
      filename: 'index.html',
      inject: 'body',
      chunks: ['main'],
    }),
  ],
  entry: {
    main: './js/main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader:'source-map',
      },
      {
        test: /\.js$/,
        loader:'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].html',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!',
      },
      {
        test: /\.scss$/,
        loader: 'style!css?importLoaders=1!sass',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url?limit=8192',
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        loader: 'url?limit=8192',
      },
    ],
  },
  bail: true,
  debug: true,
  postcss: [
    autoprefixer({browsers: ['last 1 version']}),
  ],
  eslint: {
    configFile: './.eslintrc',
    emitError: true,
  },
  devServer: {
    publicPath: '/',
    stats: {colors: true},
    host: '0.0.0.0',
    inline: true,
    port: '8090',
    quiet: false,
    noInfo: false,
  },
};
