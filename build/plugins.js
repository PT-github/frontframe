/*
 * @Author: PT
 * @Date: 2020-03-24 18:06:19
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 21:32:13
 * @Description: plugins配置
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将js中的css抽离出来 减少js包
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const manifest = require(path.join(__dirname, '../public', 'vendor', 'manifest.json'))

module.exports = function (devMode) {
  return [
    // dllPlugin关联配置
    // new webpack.DllReferencePlugin({
    //   // 跟dll.config里面DllPlugin的context一致
    //   context: process.cwd(),
    //   // dll过程生成的manifest文件
    //   manifest
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV_CONFIG: '"' + (process.env.ENV_CONFIG || 'dev') + '"'
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash:6].css', // devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash:6].css' // devMode ? '[id].css' : '[id].[hash].css',
    }),
    // 数组 放着所有的webpack插件
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] // 不删除dll目录下的文件
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
      }
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', // 打包后的文件名
      // dllName: manifest.name,
      minify: {
        removeAttributeQuotes: false, // 是否删除属性的双引号
        collapseWhitespace: false // 是否折叠空白
      }
      // hash: true //是否加上hash，默认是 false
    }),
    new VueLoaderPlugin()
  ]
}
