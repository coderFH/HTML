<template>
  <div id="app">

    <!--router-view其实就是个占位的,告诉view渲染到什么地方-->
    <router-view></router-view>

    <!--touter-link 默认会渲染成a标签,更改类型可以使用tag-->
    <!-- replace 切换的时候是替换模式   -->
    <!-- active-class="active" 可以设定一个激活的样式  也可以在router里统一布置linkActiveClass-->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--router实现动态路由,路径后拼接一个用户名   -->
    <router-link :to="'/user/'+userId">用户</router-link>

    <!--通过代码跳转   -->
    <button @click="homeClick">代码首页</button>
    <button @click="aboutClick">代码关于</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        userId : "lisi"
    }
  },
  methods : {
      homeClick() {
          console.log(111);
          // this.$router.push('/home');
          this.$router.replace('home');
      },
      aboutClick(){
          console.log(222);
          this.$router.push('/about');
      }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>
