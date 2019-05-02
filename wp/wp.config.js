/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_PATH = path.resolve(__dirname)
const DIST_PATH = path.resolve(ROOT_PATH, '../dist')

module.exports = {
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0'
  },
  entry: {
    app: './src/app.jsx'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    path: DIST_PATH,
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['*', '.css', '.js', '.jsx', '.scss']
  }
}
