/*
 * @Author: PT
 * @Date: 2020-03-24 17:54:14
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 17:36:24
 * @Description: loader配置
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将js中的css抽离出来 减少js包
module.exports = function (devMode) {
  const loaders = [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      },
      exclude: /node_modules/ // 排除 node_modules 目录
    },
    {
      test: /\.(le|c)ss$/,
      use: [
        // 'style-loader', // 项目比较小 建议使用style-loader 将css插入到html的style中
        // 'vue-style-loader' // vue项目 开发模式使用此loader(如果要使用热更新 必须使用vue-style-loader)
        devMode ? 'vue-style-loader' :
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: devMode,
            esModule: true // ,
            // publicPath: '/'
          }
        },
        'css-loader',
        'postcss-loader',
        'less-loader'
      ],
      // exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240, // 10K
            esModule: false,
            fallback: {
              loader: 'file-loader',
              options: {
                // publicPath: '/public/path/to/',
                name: devMode ? 'img/[name].[ext]' : 'img/[name]_[hash:6].[ext]'
              }
            }
          }
        }
      ],
      // exclude: /node_modules/
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
  return loaders
}
