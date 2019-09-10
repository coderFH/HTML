import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex对象
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
