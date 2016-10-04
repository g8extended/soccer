var webpack = require('webpack');
var JSHintReporter = require('jshint-loader-reporter')('stylish');

module.exports = {
	context: __dirname + "/app/src",

	entry: {
		index: "index.js",
	},

	output: {
		path: __dirname + "/app",
		filename: "[name].js"
	},

	watch: true,

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'stage-2']
			}
		}]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		   output: {
		        comments: false
		   },
		
		   compress: {
		       warnings: false
		   }
		})
	],

	devtool: "eval",

	jshint: {
		reporter: JSHintReporter
	},

	node: {
		fs: "empty"
	},

	resolve: {
		root: __dirname + '/app/src/'
	}

};