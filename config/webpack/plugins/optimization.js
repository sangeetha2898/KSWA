const TerserPlugin = require('terser-webpack-plugin');

const optimization = () => ({
    splitChunks: {
        chunks: 'all',
    },
    runtimeChunk: {
        name: 'manifest',
    },
    minimize: true,
    minimizer: [new TerserPlugin()]
})

module.exports = {optimization};