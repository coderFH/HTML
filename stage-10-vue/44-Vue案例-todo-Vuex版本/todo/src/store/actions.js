/*
* 操纵界面所有状态的异步方法
* */

import {
  ADD_TODO,
  DEL_TODO,
  SELECT_ALL_TODO,
  DEL_FINISHED_TODO,
} from "./mutation-types";

export default {
  //添加一条记录
  addTodo({commit},todo) {
    commit(ADD_TODO,{todo});
  },

  //删除一条记录
  delTodo({commit},index) {
    commit(DEL_TODO,{index});
  },

  //是否全选
  isSelectedAll({commit},isCheck) {
    commit(SELECT_ALL_TODO,{isCheck});
  },

  //删除选中的
  delFinishedTodos({commit}) {
    commit(DEL_FINISHED_TODO);
  }

}
