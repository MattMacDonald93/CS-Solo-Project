const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    // devServer: {
    //     port: 8001,
    // },
    entry: {
       src:  ".client/src/index.js",
    },    
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.s?css/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/api' : 'http://localhost:3000'
        },
    },
}