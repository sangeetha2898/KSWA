const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = () => 
    new HtmlWebpackPlugin({
        template: '_template/index.html',
        filename: 'index.html',
        favicon: '_template/favicon.ico'
    })

module.exports = {htmlWebpackPlugin};