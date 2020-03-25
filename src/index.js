/*
 * @Author: PT
 * @Date: 2020-03-23 09:49:01
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 21:32:52
 * @Description: 入口
 */
import Vue from 'vue'
import '@/assets/styles/common.less' // 全局样式控制
import config from './config'
import router from './router';
import { Button } from 'element-ui';
import App from './App.vue'
Vue.use(Button);

console.log('=====================')
console.log(config)
console.log('=====================')

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
