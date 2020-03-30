//1.字符串
let dogName : string = "旺财";
let dogSex : string = "公";
let dogAge : number = 5;

let introDog : string = `
    我有一只狗,它叫${dogName},
    它今年${dogAge}岁,它是
    ${dogSex}的
`;
console.log(introDog);

//2.数字
let num1 : number = 16;
let num2 : number = 0x10;
let num3 : number = 0o20;
let num4 : number = 0b10000;
console.log(num1, num2, num3, num4);

//3.布尔
let flag : boolean = true;
console.log(flag);

//4.数组
let numArr : Array<number> = [1,2,3];
let strArr : string[] = ["1","2","3"];
console.log(numArr);
console.log(strArr);

//5.元组
let tuple : [string,number,boolean,string];
tuple= ["北京",200,true,"上海"];
tuple[1].toString();   //tuple[1]已经知道你的类型,所以可以调用改类型的方法
console.log(tuple[0]);
console.log(tuple);

//6.枚举
enum Sex {
    man,
    woman
}

enum Color {
    red,
    yellow,
    green
}
console.log(Sex.man);
console.log(Color.red);

//7.any
let str : any;
str = '我是字符串';
str = 100;
str = true;

let arr : any[] = ['张三',19,true,'男'];
arr[3] = 2

//8.void
//如果声明了一个void类型变量,只能赋值给null或者undefined
// let str1 : void = null;
let str2 : void = undefined;
// console.log(str1,str2);

function logMsg() : void { //用于函数的返回值
    console.log("hello world");
}
logMsg()

//9.null和 undefined
//undefined和null 两者各自有自己的类型分别叫做undefined和null
let ss : null = null
let ss1 : undefined = undefined
// let ss2 : undefined = null
// let ss3 : null = undefined

//默认情况下,null和undefined是所有类型的子类型
//我们可以把null和undefined赋值给任意类型的变量
// let str4 : string = null;
// let str5 : string = undefined;

//10.never
//必须存在无法到达的终点
/*
1.never类型表示那些永不存在的值的类型
    1.抛出异常的函数(直接出错了,不会有返回结果)
    2.不会有返回值的函数表达式(某种程度上很像void)
    3.箭头函数表达式的返回类型
2.never 类型是任何类型的子类型,也可以赋值给任何类型
3.没有类型是never的子类型,任何类型不可以赋值给never类型(除了never本身之外)
*/
function error(msg : string) : never {
    throw new Error(msg)
}
error('发生未知错误')

function func() : never {
    while(true) {
        console.log(1);
    }
}

//11.object
//object表示非原始类型,也就是除number,string,boolean symbol之外的类型
let obj1 : object = {
    name : '小花',
    age : 20
}
console.log(obj1);
obj1 = [1,2,3] //数组也是object,所以可以赋值


//12.类型断言
let obj : any = 'hello world'
let str6 : string = obj.substr(0,3) //这么写,没有提示的
let str7 : string = (<string>obj).substr(0,3) //或者
let str8 : string = (obj as string).substr(0.3)

export{}