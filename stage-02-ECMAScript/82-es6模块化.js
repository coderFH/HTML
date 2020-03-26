var name = '小明';
var age = 18;
var flag = true;

function sum(num1,num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

//导出方式1:
export {
    flag,
    sum
}

//导出方式2:
export var num1 = 1000;
export var height = 1.88;

//3.导出函数和类
export function mul1(num1,num2) {
    return num1 - num2;
}

export class Person {
    run(){
        console.log('跑');
    }
}

//export.default
const address = '北京市';
//通过export default 导出的模块,外部引入的时候可以重新命名, 就 不需要 我里面导出是什么名字,外部引入的时候就必须是什么名字
//但注意: 文件里只能有一个 export default 否则外部导入的时候 不知道该对应哪个
// export default address  只能有一个export default  所以先注释了

export default function (argument) {
    console.log(argument);
}