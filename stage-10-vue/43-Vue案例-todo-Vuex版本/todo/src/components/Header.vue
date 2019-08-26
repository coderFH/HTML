<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入今天的任务单,按回车键确认"
      v-model = "title"
      @keyup.enter = "addItem()"
    />
  </div>
</template>

<script>
  export default {
    name : "Header",

    props : {
      addTodo : Function
    },

    data(){
      return {
        title : ""
      }
    },

    methods : {
      addItem() {
        //1.1 判断是否合理
        const title = this.title.trim();
        if (!title) {
          alert('输入的内容不能为空!');
          return;
        }

        //1.2 生成一个TODO对象
        const todo = {title,finished : false};
        //1.3 调用方法
        this.$store.dispatch('addTodo',todo);
        //1.4 清除输入框
        this.title = '';
      }
    }
  }
</script>


<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    outline: none;
  }

  .todo-header input:focus {
    outline: none;
    border-color: orangered;
    box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
  }

</style>
