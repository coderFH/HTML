/*
* 异步转同步,获取actions提交的状态
* */
import {
  ADD_TODO,
  DEL_TODO,
  SELECT_ALL_TODO,
  DEL_FINISHED_TODO,
} from "./mutation-types";

export default {
  //添加
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo);
  },

  //删除
  [DEL_TODO](state,{index}){
    state.todos.splice(index,1);
  },

  //全选
  [SELECT_ALL_TODO](state,{isCheck}) {
    state.todos.forEach(todo=>{
      todo.finished = isCheck;
    })
  },

  //删除选中
  [DEL_FINISHED_TODO](state){
    state.todos = state.todos.filter(todo=>!todo.finished);
  }
}
