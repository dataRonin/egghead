// entry is the script that is run, output path is the route for the base, and index.js populate that base. the devserver has hot reload with inline true and port 3333 and the module is basically describing how react, babel, etc. communicate.
module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}