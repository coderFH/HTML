<template>
  <ul class="todo-main">
    <Item
      v-for = "(todo,index) in todos"
      :key='index'
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
  //1.引入组件
  import Item from './Item'
  //2.引入状态
  import {mapState} from 'vuex'

  export default {
    name : "List",
    computed : {
      ...mapState(['todos'])
    },
    components : {
      Item
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
</style>
