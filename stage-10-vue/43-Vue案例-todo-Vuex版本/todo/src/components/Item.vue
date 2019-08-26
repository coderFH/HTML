<template>
  <li
    @mouseenter="dealShow(true)"
    @mouseleave="dealShow(false)"
    :style="{background: bgColor}"
  >
    <label>
      <input type="checkbox" v-model="todo.finished"/>
      <span>{{todo.title}}</span>
    </label>
    <button
      v-show="isShowDelButton"
      class="btn btn-warning"
      @click="delItem()"
    >删除</button>
  </li>

</template>

<script>
  export default {
    name : "Item",
    props : {
      todo : Object,
      index : Number
    },
    data(){
      return {
        isShowDelButton : false,
        bgColor : "#fff"
      }
    },
    methods : {
      dealShow(flag) {
        //1.控制背景
        this.bgColor = flag ? '#ddd' : "#fff";
        //2.控制按钮的显示和隐藏
        this.isShowDelButton = flag;
      },

      //删除当前的li标签
      delItem() {
        //提示
        if(window.confirm(`确定删除 ${this.todo.title} 吗?`)){
          this.$store.dispatch('delTodo',this.index);
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor : pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    background-color: orangered;
    padding: 4px 10px;
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
