module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/img"
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts'
        }
      }
    ]
  }
}