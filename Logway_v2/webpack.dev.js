const path = require('path');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = merge(config, {
  mode: "development",
  devtool: '#cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minimize: false
    }),
    new ErrorOverlayPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})