<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :delTodo="delTodo"/>
      <Footer
        :todos="todos"
        :isSelectedAll="isSelectedAll"
        :delFinishedTodos="delFinishedTodos"
      />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default {
  name: 'App',

  data() {
    return {
      todos : [
        {title: '学习Vue的课程', finished: true},
        {title: '和马云打场高尔夫', finished: false},
        {title: '回家敲代码', finished: false},
        {title: '去饭店吃火锅', finished: true}
      ]
    }
  },

  components: {
    Header,
    List,
    Footer
  },

  methods : {
    //添加一条记录
    addTodo(todo) {
      this.todos.unshift(todo);
    },

    //删除一条记录
    delTodo(index){
      this.todos.splice(index,1);
    },

    //是否全选
    isSelectedAll(isCheck) {
      this.todos.forEach(todo=>{
        todo.finished = isCheck;
      })
    },

    //删除选中的
    delFinishedTodos() {
      this.todos = this.todos.filter(todo => !todo.finished);
    }
  }
}
</script>

<style>

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>
