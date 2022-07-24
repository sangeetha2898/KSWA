const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { htmlWebpackPlugin } = require('./plugins/htmlWebpack');
const { cleanWebpackPlugin } = require('./plugins/cleanWebpack');
const { compressWebpack } = require('./plugins/compression');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: {
      index: path.resolve(__dirname,'../../src/index.tsx')
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].[fullhash].js',
    clean: true,
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: "/"
  },
  resolve: {
    extensions: ['*','.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 8090
  },
  plugins: [
    htmlWebpackPlugin(),
    cleanWebpackPlugin(),
    compressWebpack()
  ],
}
