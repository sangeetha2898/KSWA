const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DotEnv = require('dotenv-webpack');
const { optimization } = require('./plugins/optimization.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: optimization(),
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new DotEnv({
      path: `./.env.prod`
    })
  ]
});