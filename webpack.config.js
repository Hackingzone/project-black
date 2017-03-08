var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve('public');
var APP_DIR = path.resolve('app');

var config = {
	entry: APP_DIR + '/index.jsx',
	module : {
		loaders : [{
			test : /\.jsx?/,
			include : APP_DIR,
			loader : 'babel-loader'
		}]
	},
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	}
};

module.exports = config;