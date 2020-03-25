/*
 * @Author: PT
 * @Date: 2020-03-24 20:26:41
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 14:22:16
 * @Description: resolve配置
 */
const path = require('path')
module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '../src')
  },
  extensions: [
    '.js',
    '.jsx',
    '.vue',
    '.json'
  ]
}
// module.exports = function (devMode) {
//   return {
//     alias: {
//       vue$: devMode ? 'vue/dist/vue.runtime.esm.js' : 'vue/dist/vue.esm.js',
//       '@': path.resolve(__dirname, '../src')
//     },
//     extensions: [
//       '.js',
//       '.jsx',
//       '.vue',
//       '.json'
//     ]
//   }
// }
