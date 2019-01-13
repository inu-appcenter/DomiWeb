import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import router from './routes'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
