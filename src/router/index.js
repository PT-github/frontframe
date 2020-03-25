/*
 * @Author: PT
 * @Date: 2020-03-25 17:37:42
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 17:44:54
 * @Description: 路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: 'Login' */ '@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: 'Home' */ '@/views/home')
    },
  ]
})
export default router