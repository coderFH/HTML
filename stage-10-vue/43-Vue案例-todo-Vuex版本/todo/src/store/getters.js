/*
* 通过Getter可以派生出一些新的状态
* */

export default {
  finishedCount(state) {
    return state.todos.reduce((total,todo)=>total+(todo.finished ? 1 : 0),0);
  },
  totalCount(state) {
    return state.todos.length;
  },
  isCheckAll(state,getters) {
    return getters.finishedCount === getters.totalCount && getters.totalCount > 0;
  }

}
