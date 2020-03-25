/*
 * @Author: PT
 * @Date: 2020-03-24 18:10:58
 * @LastEditors: PT
 * @LastEditTime: 2020-03-24 18:12:25
 * @Description: output配置
 */
const path = require('path')
module.exports = function (devMode) {
  return {
    path: path.resolve(__dirname, '../dist'), // 必须是绝对路径
    filename: devMode ? 'js/[name].js' : 'js/[name].[hash:6].js',
    publicPath: '/' // 通常是CDN地址
  }
}
