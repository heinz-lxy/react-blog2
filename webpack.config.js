var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx')
  },
  output: {
    path: ROOT_PATH ,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: ROOT_PATH
  },
  module: {
    loaders: [
	{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: ROOT_PATH
    },
	{
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
	}
	]
  }

};