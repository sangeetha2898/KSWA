const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const DotEnv = require('dotenv-webpack');
const WebPackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new DotEnv({
      path: `./.env.dev`
    }),
    // new WebPackBundleAnalyzer.BundleAnalyzerPlugin()
  ]
});