import Vue from 'vue'
import VueRouter from 'vue-router'
import Sum from '@/Page/Sum.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sum',
      component: Sum,
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
})
