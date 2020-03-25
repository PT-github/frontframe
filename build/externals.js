/*
 * @Author: PT
 * @Date: 2020-03-24 20:21:53
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 14:37:17
 * @Description: externals
 */
module.exports = function (devMode) {
  // 生产环境下，这些库可不打包，由index.html引入
  return devMode ? {} : {
    // vue: 'Vue',
    // 'vue-router': 'VueRouter'
  }
}
