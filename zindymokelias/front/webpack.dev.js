const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "#cheap-module-source-map",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minimize: false,
		}),
		new ErrorOverlayPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
});
