<template>
  <div id="app">

    <!--router-view其实就是个占位的,告诉view渲染到什么地方-->
    <!-- keep-alive 保证组件只创建一次, exclude 排除那个组件,也就是每次都创建  -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>


    <!--touter-link 默认会渲染成a标签,更改类型可以使用tag-->
    <!-- replace 切换的时候是替换模式   -->
    <!-- active-class="active" 可以设定一个激活的样式  也可以在router里统一布置linkActiveClass-->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>


    <router-link to="/about">关于</router-link>


    <!--router实现动态路由,路径后拼接一个用户名   -->
    <router-link :to="'/user/'+userId">用户</router-link>


    <!--向下级页面传递参数-->
    <!--  可以看这种方式下,url路径的变化  -->
    <router-link :to="{path : '/profile',query : {name : 'wfh',age : 18,height : 1.88}}">档案</router-link>


    <br>
    <br>
    <br>

    <!--通过代码跳转   -->
    <button @click="homeClick">代码首页</button>
    <button @click="aboutClick">代码关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

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
      },
      userClick() {
          this.$router.push('/user/' + this.userId);
      },
      profileClick() {
          this.$router.push({
              path : '/profile',
              query : {
                  name : 'T-mac',
                  age : 18,
                  height : 220
              }
          })
      }
  }
}
</script>

<style>
  /*解释看第9行*/
  .active {
    color: red;
  }
</style>
