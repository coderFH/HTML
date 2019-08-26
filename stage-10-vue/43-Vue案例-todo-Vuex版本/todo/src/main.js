// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// 引入通用的样式文件
import './assets/css/base.css'

new Vue({
  el: '#app',
  store,//配置vuex
  render : h => h(App)
});
