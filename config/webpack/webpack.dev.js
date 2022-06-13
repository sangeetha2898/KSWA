const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const DotEnv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new DotEnv({
      path: `./.env.dev`
    })
  ]
});