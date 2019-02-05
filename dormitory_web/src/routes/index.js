import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    
    //로그인 페이지 경로
    {
      path: '/',
      name: 'login',
      component: login,
    }
  ]
})
