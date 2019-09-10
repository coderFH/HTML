import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=> import('../views/home/Home');
const Category = ()=> import('../views/category/Category');
const Cart = ()=> import('../views/cart/Cart');
const Profile = ()=> import('../views/profile/Profile');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode : 'history'
})
