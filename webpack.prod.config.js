const baseConfig = require('./webpack.base.config.js');
const HtmlWebbpackPlugin = require('html-webpack-plugin');

baseConfig.devtool = 'cheap-module-source-map';
baseConfig.plugins = [
  new HtmlWebbpackPlugin({
    title: 'Shrimp',
    template: 'index.ejs'
  })
];
module.exports = baseConfig;
