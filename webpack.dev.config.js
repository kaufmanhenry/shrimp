const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const HtmlWebbpackPlugin = require('html-webpack-plugin');

baseConfig.entry = ['webpack-hot-middleware/client', './index'];
baseConfig.output.publicPath = '/';
baseConfig.plugins = [
  new HtmlWebbpackPlugin({
    title: 'Shrimp',
    template: 'index.ejs'
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

module.exports = baseConfig;
