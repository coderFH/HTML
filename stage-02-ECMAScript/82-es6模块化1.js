//这里的.js不能简写,在项目的脚手架里可以
//1.导入{}中定义的变量
import {flag,sum} from "./349-es6模块化.js";

//2.直接导入export定义的变量
import {num1,height} from './349-es6模块化.js'

//3.导入export的funciton和类
import {mul1,Person} from "./349-es6模块化.js";

//4.导入默认的
// import addr from './49-es6模块化.js'  //导出文件里只能有一个export default 因为要测试下边的 所以先注释
import log from "./349-es6模块化.js";

var name = '小红';

if (flag) {
    console.log(sum(20, 30));
}

console.log(num1,height);

console.log(mul1(50, 30));

const p = new Person();
p.run();

// console.log(addr);

log('默认导出的函数');


//5.统一的全部导入
import * as aaa from "./349-es6模块化.js";
console.log(aaa.flag);
console.log(aaa.height);