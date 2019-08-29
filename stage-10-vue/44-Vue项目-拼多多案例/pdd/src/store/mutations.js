import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  REC_SHOP_LIST,
  SEARCH_GOODS
} from "./mutations-types";

export default {
  [HOME_CASUAL](state,{home_casual}) {
    state.homecasual = home_casual;
  },
  [HOME_NAV](state, {home_nav}) {
    state.homenav = home_nav;
  },
  [HOME_SHOP_LIST](state, {home_shop_list}) {
    state.homeshoplist = home_shop_list;
  },
  [REC_SHOP_LIST](state, {rec_shop_list}) {
    state.recshoplist = rec_shop_list;
  },
  [SEARCH_GOODS](state, {search_goods}){
    state.searchgoods = search_goods;
  }
}
