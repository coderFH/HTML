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
const Profile = () => import('../components/Profile');


// 1.通过Vue.use(插件),安装插件
Vue.use(Router);

//2.创建VueRouter对象
//3.将router对象传入到vue实例
const router = new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '/home',
      component: Home,
      children : [
        {
          path : '/',
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
      meta : {
        title : "关于"
      },
      component: About
    },
    {
      //:userId router-link处后面可以拼接一个用户名
      path: '/user/:userId',
      name: 'User',
      meta : {
        title : "用户"
      },
      component: User
    },
    {
      path: '/profile',
      name: 'profile',
      meta : {
        title : "档案"
      },
      //====================路由独享守卫==================
      //===================还有组件内守卫,顾名思义,写在组件内部,到时候自己看看官网吧 孩子==================
      beforeEnter:(to,from,next) => {
        console.log('------');
        next();
      },
      component: Profile
    },
    {
      path: '/',
      //重定向
      redirect: 'Home',
    }
  ],
  //改变路径的方式有两种:1.RUL的hash 2.html5的history 默认情况下,路径的改变使用的是url的hash
  mode : 'history', //使用html5的history模式,
  linkActiveClass : 'active',
});


//====================全局守卫==================
//前置守卫
//导航守卫,切换路由的时候,可以做一个中间拦截,做自己想做的事情
router.beforeEach((to,from,next)=>{
  // console.log('beforeEach');
  //从from跳转到to
  //路由里需要配置meta属性
  document.title = to.matched[0].meta.title;
  next()
});

//后置守卫
router.afterEach((to,from)=>{
  // console.log('afterEach');
});


export default router
