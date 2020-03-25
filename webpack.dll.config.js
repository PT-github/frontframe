/*
 * @Author: PT
 * @Date: 2020-03-23 15:55:43
 * @LastEditors: PT
 * @LastEditTime: 2020-03-24 22:37:12
 * @Description: webpack 公共js配置
 */
const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    vendor: [path.resolve('src', 'vendor.js')]
  },
  output: {
    path: path.join(__dirname, 'public', 'vendor'),
    filename: '[name]_[chunkhash:6].js',
    library: '[name]_[chunkhash:6]'
  },

  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, './public/vendor')
    }),
    new webpack.DllPlugin({
      // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
      context: process.cwd(),

      // manifest.json文件的输出位置
      path: path.resolve(__dirname, 'public/vendor/manifest.json'), // path.joinh('dist', 'dll', '[name]-manifest.json'),

      // 定义打包的公共vendor文件对外暴露的函数名
      name: '[name]_[chunkhash:6]'
    })
  ]
}
