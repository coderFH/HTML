/*
1.函数时JS应用程序的基础,他帮助你实现抽象层,模拟类,信息隐藏和模块
2.在TS中,虽然已经支持类,命名空间和模块,但函数仍然是主要的定义行为的地方
3.TS 为 JS 函数添加了额外的功能,让我们可以更容易的使用
*/

//1.基本示例
//命名函数
function max(x : number, y : number) : number {
    return x > y ? x : y
}

//匿名函数
let max1 = function(x : number , y : number) : number {
    return x > y ? x : y
}

//箭头函数
let max2 = (x : number, y : number) => {
    return x > y ? x : y
}

let num : number = 100
function func(num1 : number,num2 : number) : number {
    return num1 + num2 + num
}

export{}