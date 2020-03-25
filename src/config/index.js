/*
 * @Author: PT
 * @Date: 2020-03-25 21:12:36
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 21:29:04
 * @Description: 开发环境配置
 */
import Vue from 'vue'
let config = require(`./${process.env.ENV_CONFIG}.js`).default
Vue.prototype.$config = config
export default config