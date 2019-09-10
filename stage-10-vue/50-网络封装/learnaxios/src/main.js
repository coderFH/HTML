import Vue from 'vue'
import App from './App'

import axiox from 'axios'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});


axiox({
  url:'httpbin.org',
  //专门针对get请求的参数拼接
  params : {
    type : 'pop',
    page : 1
  }
}).then(res => {
  console.log(res);
});

//axios的全局配置
axios.defaults.baseURL = 'http://192.168.0.1';
axios.defaults.timeout = 5;

//axios发送并发请求
axiox.all([axiox({
  url : '/home/data'
}),axiox({
  url : '/search/data',
  params: {
    type: 'sell',
    page : 5
  }
})]).then(results => {
  console.log(results);
  console.log(results[0]);
  console.log(results[1]);
});

//then后,也可以通过这种方式去取值,也叫延展的操作
axiox.all([axiox({
  url : '/home/data'
}),axiox({
  url : '/search/data',
  params: {
    type: 'sell',
    page : 5
  }
})]).then(axios.spread((res1,res2) =>  {
  console.log(res1);
  console.log(res2);
}));

//==========================创建对应的axios实例,自己用自己的实例,即使baseurl不一致也无所谓================================
const instance1 = axios.create({
  baseURL : "http://11.11.11.11",
  timeout : 5000
});

instance1({
  url : '/home/data'
}).then(res => {
  console.log(res);
});

instance1({
  url : '/home/data2',
  params : {
    type : 'pop',
    page : 1
  }
}).then(res => {
  console.log(res);
});

const instance2 = axios.create({
  baseURL : "http://22.22.22.22",
  timeout : 5000
});

instance2({
  url : '/home/data2',
  params : {
    type : 'pop',
    page : 1
  }
}).then(res => {
  console.log(res);
});

//==============封装的使用=============
import {axRequest1,axRequest2,axRequest3,axRequest4} from './components/request'
axRequest1({
  url : '/home'
},res => {
  console.log(res);
},err => {
  console.log(err);
});





