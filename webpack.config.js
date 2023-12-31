const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        "index": './src/index.js',
        "menu": './src/menu.js',
        "hours": './src/hours.js',
        "contact": './src/contact.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Odin's Eats",
            filename: 'index.html',
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|gif|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};