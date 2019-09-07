import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";

//路由懒加载的写法,上边的就注释了
const Home = ()=> import('../components/Home');
const HomeNews = ()=> import('../components/HomeNews');
const HomeMessage = ()=> import('../components/HomeMessage');
const About = ()=> import('../components/About');
const User = ()=> import('../components/User');


// 1.通过Vue.use(插件),安装插件
Vue.use(Router);

//2.创建VueRouter对象
//3.将router对象传入到vue实例
export default new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children : [
        {
          path : '',
          redirect : 'news'
        },
        {
          path : 'news',
          component : HomeNews
        },
        {
          path : 'message',
          component : HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      //:userId routeer-link处后面可以拼接一个用户名
      path: '/user/:userId',
      name: 'User',
      component: User
    },
    {
      path: '',
      //重定向
      redirect: Home,
    }
  ],
  //改变路径的方式有两种:1.RUL的hash 2.html5的history 默认情况下,路径的改变使用的是url的hash
  mode : 'history', //使用html5的history模式,
  linkActiveClass : 'active'
})
