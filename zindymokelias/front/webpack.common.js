module.exports = {
	entry: {
		main: "./src/index.jsx",
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: "babel-loader",
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
		],
	},
};
