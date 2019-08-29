import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecShopList,
  getSearchgoods
} from "../api";

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST,
  SEARCH_GOODS
} from "./mutations-types";

export default {
  //1.获取首页轮播图
  async reqHomeCasual({commit},callBack) {
    const result = await getHomeCasual(); //因为是异步的  需要使用await等待数据结果
    console.log(result);
    if (200 === result.success_code) {
      commit(HOME_CASUAL,{ home_casual: result.message });
      callBack && callBack();
    }
  },

  // 2. 获取首页轮播图
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    if(200 === result.success_code){
      commit(HOME_NAV, {home_nav: result.message});
    }
  },

  // 3. 获取首页商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    if(200 === result.success_code){
      commit(HOME_SHOP_LIST, {home_shop_list: result.message});
    }
  },

  // 4. 请求推荐的列表数据
  async reqRecShopList({commit}, params, callBack) {
    const result = await getRecShopList(params);
    if (true === result.success) {
      commit(REC_SHOP_LIST, {rec_shop_list: result.data});
      // 执行回调
      callBack && callBack();
    }
  },

  // 5. 请求搜索的列表数据
  async reqSearchGoods({commit}) {
    const result = await getSearchgoods();
    if (200 === result.success_code) {
      commit(SEARCH_GOODS, {search_goods: result.message.data});
    }
  }
}
