const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ['./main.js', './styles/style.scss', './styles/style2.scss'],
	output : {
		filename : './../webapp/build.js'
	},
	
	module : {
		rules : [
			{
				test : /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
			test: /\.js$/,
				loader: 'babel-loader',
				exclude : /node-modules/
			},
			{
				test: /\.vue$/,
				loader : 'vue-loader'
			},
			{
				test : /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			}
		]
	},
		
	plugins: [
		new ExtractTextPlugin({ // define where to save the file
				filename: './../webapp/bundle.css'
		}),
	],
}