
import Vue from 'vue'
import App from './App'
//引入路由对象
import router from './router/index'


import "common/stylus/mixins.styl"

new Vue({
  el: '#app',
  router,
  render : h => h(App)
});
