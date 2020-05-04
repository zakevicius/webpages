module.exports = {
	entry: {
		main: "./src/index.jsx",
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
