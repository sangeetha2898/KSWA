const CompressionPlugin = require('compression-webpack-plugin');

const compressWebpack = () => 
    new CompressionPlugin({
        test: /\.(js|css|html|svg|png|jpg|ico)$/,
        filename: '[name].[path].gz[query]',
        minRatio: 0.8,
        threshold: 10240,
        algorithm: 'gzip',
    })

module.exports = { compressWebpack };