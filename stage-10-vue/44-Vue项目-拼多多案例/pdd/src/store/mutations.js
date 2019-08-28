import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST
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
}
