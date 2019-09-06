//使用commonjs的模块化规范
const {add,mul} = require('./js/mathUtils');

console.log(add(20, 30));
console.log(mul(20, 30));

//使用es6的模块化规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css');

//4.依赖less文件
require('./css/special.less');

//5.使用vue进行开发
import Vue from 'vue'

const App = {
    template :  `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnclick">点击按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
    data() {
        return {
            message : '使用vue',
            name : 'wfh'
        }
    },
    methods : {
        btnclick() {
            console.log('btnclick');
        }
    }
};

const app = new Vue({
    el : '#app',

    //el 和template的关系,当vue实例中出现template模板,el会把template里的代码拷贝到 自己所挂载的 dom 里
    //即  el和template同时存在,el挂载的dom会替换template中的内容

    //但是在vue里写太多template很不友好,所以一般创建一个组件抽取出去(就是上边的app) 所以下面的一大坨都可以不要,只需要注册下组件
    //抽取完的样式  跟创建一个.vue文件就很类似了

    // template :  `
    //     <div>
    //         <h2>{{message}}</h2>
    //         <button @click="btnclick">点击按钮</button>
    //         <h2>{{name}}</h2>
    //     </div>
    // `,
    //
    // data : {
    //     message : '使用vue',
    //     name : 'wfh'
    // },
    // methods : {
    //     btnclick() {
    //         console.log('btnclick');
    //     }
    // }
    template : '<App/>',
    components : {
        App
    }
});