<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default {
  name: 'App',

  components: {
    Header,
    List,
    Footer
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
