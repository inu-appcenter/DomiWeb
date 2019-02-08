import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/routes'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'logout'
  },
  mutations: {
    setToken: function(state, data){
      state.token = data
    }
  },
  actions: {

  },
})



Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
