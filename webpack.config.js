const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const env = process.env.NODE_ENV;

const config = {
  development: {
    devtool: 'cheap-module-eval-source-map',
  },
  production: {
    devtool: undefined,
  },
};

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: config[env].devtool,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
      },
      {
        reload: false,
      },
    ),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
