const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  target: 'atom',
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  resolve: {
    alias: {},
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new BrowserSyncPlugin({
      host: 'localhost',
      port,
      notify: false,
      ghostMode: false,
      open: false,
      files: ['index.html', 'index.css', 'build/main.js'],
      server: {
        baseDir: ['.']
      }
    })
  ]
};
