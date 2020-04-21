// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })


const cpn = {
  template : `<div>{{message}}</div>`,
  data() {
    return {
      message : '我是组件message'
    }
  }
}
//当使用runtime-only 时,h=>h(App)的本质 类似以下代码
new Vue({
  el: '#app',
  render : function (createElement) {
    //1.createElement('标签',{标签的属性},[''])

    //普通用法
    // return createElement ('h2',
    //   {class : 'box'},
    //   ['hello world',createElement('button',['按钮'])])

    //还可以传递组件
    return createElement(cpn); //所以我就可以直接传App组件
  }
});
