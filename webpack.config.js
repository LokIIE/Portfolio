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

module.exports = {
    mode: 'production',
    entry: {
        index: './src/js/index.js',
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].min.js'
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new WebPlugin({
            template: './src/index.html',
            filename: 'index.html',
            requires: ['index']
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
        }),
        new WebPlugin({
            template: './src/iiens.html',
            filename: 'iiens.html',
            requires: ['main']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },{
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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/'
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