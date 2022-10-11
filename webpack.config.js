const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {index: path.resolve(__dirname, 'source', 'index.js')},
    output : {path: path.resolve(__dirname, 'build'), filename: 'index.js'},
    plugins : [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'source', 'index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    }
}