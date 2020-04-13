const path = require('path');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {
    WebPlugin
} = require('web-webpack-plugin');

var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'assets/main.min.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css"
        }),
        new WebPlugin({
            template: './src/index.html',
            filename: 'index.html',
            requires: ['main']
        }),
        new WebPlugin({
            template: './src/list.html',
            filename: 'list.html',
            requires: ['main']
        }),
        new WebPlugin({
            template: './src/portfolio.html',
            filename: 'portfolio.html',
            requires: ['main']
        })
    ],
    module: {
        rules: [{
                test: /\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5000
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}