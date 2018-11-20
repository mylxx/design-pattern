const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},

	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_model)/,
			loader: 'babel-loader'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],


	devServer: {
		contentBase: path.join(__dirname, './release'),
		open: false,
		port: 9529,
		proxy: {
			'/api/*': {
				target: 'http://localhost:8880'
			}
		}
	}
}