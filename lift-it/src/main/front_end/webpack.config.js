const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: ['./main.js', './styles/style.scss', './styles/style2.scss', './assets/*.png'],
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
			},
			{
				test : /\.png$/,
				use : [
				       {	
				    	   loader: 'file-loader',
				    	   options :{
				    		         'outputPath' : './../webapp/assets',
				    		         'name' : '[name].[ext]'
				    		        }
				       }
				]
			}
		]
	},
		
	plugins: [
		new ExtractTextPlugin({ // define where to save the file
				filename: './../webapp/bundle.css'
		}),
		new HtmlWebPackPlugin({title : 'Lift It', filename : './../webapp/index.html'}),
	],
}