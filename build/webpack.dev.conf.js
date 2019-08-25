const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.config');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  stats: 'verbose',
  output: {
    path: path.resolve(__dirname, '../dev')
  },
  module: {
    rules: [
      {
        test: /\.(css|postcss)$/,
        // exclude: /node_modules/,
        use: [
          {
            loader: 'vue-style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                url: (url, resourcePath) => {
                  if (url.includes('www.sogou.com')) {
                  return false
                }
                return true
              }
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },

  devServer: {
    contentBase: [
      path.resolve(__dirname, '../dev'),
    ],
    host: '0.0.0.0',
    port: 8080,
    clientLogLevel: 'info',
    proxy: {
      '/services/*': {
        target:
          process.env.APP_SERVER === 'mock'
            ? 'http://localhost:3000'
            : 'http://10.135.77.7:8080',
        pathRewrite:
          process.env.APP_SERVER === 'mock'
            ? { '^/services/DLMAppService/requestHandling': '' }
            : {},
        changeOrigin: true
      },
      '/task-report/*': {
        target:
          process.env.APP_SERVER === 'mock'
            ? 'http://localhost:3000'
            : 'http://10.135.77.96:8080',
        changeOrigin: true
      }
    }
  },

  plugins: [
  ]
});
