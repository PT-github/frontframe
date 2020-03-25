/*
 * @Author: PT
 * @Date: 2020-03-23 09:49:01
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 17:41:40
 * @Description: 入口
 */
import Vue from 'vue'
import '@/assets/styles/common.less'
import router from './router';
import { Button } from 'element-ui';
import App from './App.vue'
Vue.use(Button);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
