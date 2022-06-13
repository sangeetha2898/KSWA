const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DotEnv = require('dotenv-webpack');
const { optimization } = require('./plugins/optimization.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: optimization(),
  plugins: [
    new DotEnv({
      path: `./.env.prod`
    })
  ]
});