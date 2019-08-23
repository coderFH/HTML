<template>
  <ul class="todo-main">
    <Item
      v-for = "(todo,index) in todos"
      :key='index'
      :todo="todo"
      :index="index"
      :delTodo="delTodo"
    />
  </ul>
</template>

<script>
  //1.引入
  import Item from './Item'

  export default {
    name : "List",
    props : {
      todos : Array,
      delTodo : Function
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
