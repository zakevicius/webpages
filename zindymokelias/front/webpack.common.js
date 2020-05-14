module.exports = {
	entry: {
		main: "./src/index.jsx",
	},
	devServer: {
		historyApiFallback: true,
		contentBase: "./",
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(svg|png|jpeg|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "assets/img",
					},
				},
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "assets/fonts",
				},
			},
		],
	},
};
