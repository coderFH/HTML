
import Vue from 'vue'
import App from './App'

//引入路由对象
import router from './router/index'

// 引入vuex对象
import store from './store'

//引入顶部的srcollview
import LyTab from 'ly-tab'
Vue.use(LyTab);

import "common/stylus/mixins.styl"

new Vue({
  el: '#app',
  router,
  store,
  render : h => h(App)
});
