const webpack = require('webpack');
var path = require("path")
path: path.resolve(__dirname, './dist'),

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + '/dist',
		filename: "index.js"
	},
	module: {
		//加载器配置
		rules: [
     	{
			test: /\.css$/,
			use: [{
					loader: "style-loader"
				},
				{
					loader: "css-loader"
				}
			]
		},
     	{ test: /\.(png|jpg|jpeg)$/, use: ['url']},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				query: {
          			presets: ['react']
        		}
			}
		}]
	},
}
