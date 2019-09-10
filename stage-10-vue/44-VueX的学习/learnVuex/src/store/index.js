import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types";

//1.安装插件
Vue.use(Vuex);

//模块的学习
const moduleA = {
  state:{
    name : 'kobe'
  },
  mutations:{
    //模块中的名字,不能一样,要不外界通过dispath调用的时候,不知道修改谁
    updateName(state) {
      state.name = 'T-mac'
    }
  },
  actions:{
    aUpdateMoudleAName(context) {
      setTimeout(()=>{
        context.commit('updateName','T-mac')
      },1000)
    }
  },
  getters:{
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state,getters) {
      return getters.fullName +'222';
    },
    //调用不同模块的属性,第三个参数可以拿到rootState
    fullName3(state, getters,rootState) {
      return getters.fullName2 + rootState.counter;
    }
  }
};

//2.创建对象,并且导出
export default new Vuex.Store({
  state : {
    counter : 1000,
    students : [
      {id:110,name : "why1",age : 11},
      {id:110,name : "why2",age : 80},
      {id:110,name : "why3",age : 13},
      {id:110,name : "why4",age : 89},
      {id:110,name : "why5",age : 76},
      ],
    info : {
      name : "wfh",
      age : 18,
      height : 1.88
    }
  },
  getters : {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Age(state) {
      return state.students.filter(s => s.age > 20)
    },
    //getters还有第二个参数,可以直接拿到getters
    more20AgeLength(state,getters) {
      return getters.more20Age.length
    },
    //外界可以传age的限制
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      //或者
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  mutations : {
    //方法
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },

    //第一种提交风格这么些没问题
    // incrementCount(state,count) {
    //   state.counter += count
    // },

    //针对第二种提交风格
    incrementCount(state,payload) {
      state.counter += payload.count
    },

    //添加对象类型
    addStudent(state,stu) {
      state.students.push(stu)
    },

    //异步处理 ,必须配合actions
    updateInfo(state) {
      state.info.name = 'wangfuhao'
    }
  },
  //vue建议我们所有的异步操作,放到action里
  actions : {
    //context:默认参数 上下文 就理解成是store
    //这种方式,虽然能告诉外界自己内部完成了操作,但是很不优雅,看下边的
    // aUpdateInfo(context,payload) {
    //   console.log(payload.message);
    //   setTimeout(()=>{
    //     context.commit('updateInfo');
    //     payload.success();
    //   },1000)
    // }

    aUpdateInfo(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload);
          resolve('11111');
        },1000);
      })
    }
  },

  //当应用变得非常复杂是,store对象就有可能变得相当臃肿
  //为了解决这个问题,vuex允许我们将store分割成模块,而每个模块拥有自己state,mutation,aciton,getters等
  modules : {
    a : moduleA
  }
})
