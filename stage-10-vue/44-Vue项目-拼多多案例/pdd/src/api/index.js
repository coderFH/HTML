import ajax from './ajax'

//1.定义基础路径
const BASE_URL = 'http://localhost:1688';

//2. 请求方法
//2.1 请求轮播图数据
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual');
// 2.2 请求首页的导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');
// 2.3 请求首页的商品列表
export const getHomeShopList = () => ajax(BASE_URL + '/api/homeshoplist');
