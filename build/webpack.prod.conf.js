const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: "source-map",
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.(css|postcss)$/,
                // exclude: /node_modules/,
                use: [
                    // use in development
                    // {
                    //     loader: 'style-loader',
                    // },
                    // use in production
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            url: (url, resourcePath) => {
                                return url.includes('www.sogou.com');
                            },
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]_[chunkhash:4].css',
            chunkFilename: 'static/css/chunks/[name]_[chunkhash:4].css',
        }),


        new CleanWebpackPlugin()
    ],
})
