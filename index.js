require('babel-polyfill');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const path = require('path');
const express = require('express');

// Setup express
const app = express();
app.set('router', express.Router);

// Webpack configuration
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.join(`${__dirname}/dist/index.html`)));

app.listen(3000);
console.info('==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.');
