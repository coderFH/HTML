<template>
  <div id="app">
    <h2>-------------App内容------------</h2>
    <div>{{$store.state.counter}}</div>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="addCount(5)">加5</button>
    <button @click="addCount(10)">加10</button>

    <button @click="addStudent">添加一个学生</button>

    <h2>-------------App内容:getters相关信息------------</h2>
    <div>{{$store.getters.powerCounter}}</div>
    <div>{{$store.getters.more20Age}}</div>
    <div>大于20岁的个数:{{$store.getters.more20AgeLength}}</div>
    <div>{{$store.getters.moreAgestu(20)}}</div>

    <h2>-------------App内容:异步修改info------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="upateInfo">修改信息</button>

    <h2>-------------App内容:modules中内容------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <div>{{$store.getters.fullName}}</div>
    <div>{{$store.getters.fullName2}}</div>
    <div>{{$store.getters.fullName3}}</div>
    <button @click="asyncUpdateName">异步修改模块内的</button>

    <h2>--------------子组件中的内容---------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import {INCREMENT} from "./store/mutations-types";

  export default {
      name : 'App',
      components : {
          HelloWorld
      },
      methods : {
          addition() {
              this.$store.commit(INCREMENT)
          },
          subtraction() {
              this.$store.commit('decrement')
          },

          //=======================mutations传参========================
          addCount(count) {
              //1.普通的提交风格
              // this.$store.commit("incrementCount",count);

              //2.特殊的提交风格
              this.$store.commit({
                  type : 'incrementCount',
                  count
              })
          },
          addStudent() {
              const stu = {id : 110,name : "why6",age : 76};
              this.$store.commit("addStudent",stu)
          },

          //=======================actions调用加传参========================
          upateInfo() {
              //不优雅,看下边的实现
              // this.$store.dispatch('aUpdateInfo',{
              //     message : '我是参数',
              //     success :  () => {
              //         console.log('里边操作完成了');
              //     }
              // });


              this.$store
                  .dispatch('aUpdateInfo','我是携带的信息')
                  .then(res => {
                      console.log('里面完成了操作');
                      console.log(res);
                  });
          },


          ////=======================modules相关的========================
          updateName() {
              this.$store.commit('updateName');
          },
          asyncUpdateName() {
              this.$store.dispatch('aUpdateMoudleAName')
          },

      }
  }
</script>

<style>
</style>
