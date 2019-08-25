const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // mode: 'production',
  // devtool: "source-map",
  // Change to your "entry-point".
  // context: path.resolve(__dirname, '../src'),
  entry: {
    main: path.resolve(__dirname, '../src/index.ts')
  },
  output: {
    path: path.resolve('dist'),
    filename: 'static/js/[name]_[hash:4].js',
    chunkFilename: 'static/js/chunks/[name]_[chunkhash:4].js'
  },
  resolve: {
    extensions: ['.vue', '.ts', '.tsx', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      'cube-ui': 'cube-ui/lib',
      '@': path.resolve(__dirname, '../src'),
    }
  },
  externals: {
    // ramda: 'ramda'
    // auth: 'auth',
  },
  module: {
    // noParse: (content) => {
    //     return content === '@assets/icon/iconfont'
    // },
    rules: [
      {
        enforce: "pre",
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/, /iconfont/],
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff2|woff)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192000
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // default async
      minSize: 0, // default 30000
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),

    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_SERVER': JSON.stringify(process.env.APP_SERVER)
    })
    // new MiniCssExtractPlugin({
    //     filename: "[name].css"
    // }),
  ].concat([
    new HtmlWebpackPlugin({
      template: 'public/index.ejs',
      filename: 'index.html',
      templateParameters: {
        NODE_ENV: process.env.NODE_ENV,
        APP_SERVER: process.env.APP_SERVER
      },
      chunks: ['main']
    })
  ])
};
