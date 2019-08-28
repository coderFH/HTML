//1.引入
import Vue from 'vue'
import VueRouter from 'vue-router'

//引入一级的路由板块
import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Cart from './../pages/Cart/Cart'
import Search from './../pages/Search/Search'
import Me from './../pages/Me/Me'

// 引入二级的路由版块
import Hot from '../pages/Home/Children/Hot/Hot'
import Box from './../pages/Home/Children/Box'
import Dress from './../pages/Home/Children/Dress'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

//2.声明使用
Vue.use(VueRouter);

//3.输出路由对象
export default new VueRouter({
  //3.1 配置一级路由
  routes : [
    {
      path : '/home',
      component : Home,
      children: [
        {path: 'hot', component: Hot},
        {path: 'box', component: Box},
        {path: 'dress', component: Dress},
        {path: 'ele', component: Ele},
        {path: 'food', component: Food},
        {path: 'general', component: General},
        {path: 'man', component: Man},
        {path: 'mbaby', component: Mbaby},
        {path: 'shirt', component: Shirt},
        {path: '/home', redirect: '/home/hot'}
      ]
    },
    {path : '/recommend',component : Recommend},
    {path : '/cart',component : Cart},
    {path : '/search',component : Search},
    {path : '/me',component : Me},
    {path : '/',redirect : '/home'}
  ]
});


