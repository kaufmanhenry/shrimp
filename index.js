require('babel-polyfill');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line

const app = express();
const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const isDevelopment = process.env.NODE_ENV !== 'production';
const DEFAULT_PORT = 3000;
const compiler = webpack(config);

require('dotenv').config({ path: '.env' });

app.set('port', process.env.PORT || DEFAULT_PORT);

app.set('router', express.Router);

app.use('/api', require('./backend/index'));

if (isDevelopment) {
  // Serving the files on the dist folder
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  // Send index.html when the user access the web
  app.get('*', (req, res, next) => {
    const filename = path.join(DIST_DIR, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
} else {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

app.listen(app.get('port'), () => {
  console.info('==> 🌎  Listening on port 3000. Open up http://localhost:3000/ in your browser.');
});
