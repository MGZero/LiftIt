module.exports = {
	entry: './main.js',
	output : {
		filename : './../webapp/build.js'
	},
	
	module : {
		loaders :[
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude : /node-modules/
		},
		{
			test: /\.vue$/,
			loader : 'vue-loader'
		}]
	}
}