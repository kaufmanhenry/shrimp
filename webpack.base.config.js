const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, 'dist');
const CLIENT_DIR = path.join(__dirname, 'frontend');

module.exports = {
  context: CLIENT_DIR,
  entry: './index',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
};
