const path = require('path')
const webpackBaseConfig = require('../build/webpack.config')

module.exports = async ({ config }) => {
  config.module.rules.push({
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
            return url.includes('www.sogou.com');
          }
        }
      },
      {
        loader: 'postcss-loader'
      }
    ]
  })
  config.module.rules.push({
    // Include ts, tsx, js, and jsx files.
    test: /\.(ts|js)x?$/,
    exclude: [/node_modules/, /iconfont/],
    use: ['babel-loader']
  })

  config.module.rules.push(webpackBaseConfig.module.rules[0])
  config.resolve.extensions.pop()
  config.resolve.extensions.unshift('.ts')
  config.resolve.extensions.unshift('.vue')
  config.resolve.alias['@'] = path.resolve(__dirname, '../src')
  
  return config
}
