/*eslint no-console:0 */
'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
var path = require('path');
config.entry.push('webpack-dev-server/client?http://0.0.0.0:8000');
config.entry.push('webpack/hot/only-dev-server')
config.module.loaders[0].loaders.unshift('react-hot')
config.plugins.push(new webpack.HotModuleReplacementPlugin())
//console.log(config)
var compiler = webpack(config);
//console.log(compiler)
var server = new WebpackDevServer(compiler, {
  hot: true,
  historyApiFallback: true,
});

server.listen(8000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + 8000);
});
