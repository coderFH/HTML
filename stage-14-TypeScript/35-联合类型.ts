/*
联合类型: 一个代码库希望传入多种类型的参数

需求:
左侧拼接:
    1.如果传入字符串,则直接拼接
    2.如果传入数字,则创建空格拼接
    3.其他的为非法
*/

function padLeft(value : string,padding : any) {
    if (typeof padding == 'number') {
        return Array(padding+1).join(' ') + value //Array是从0开始,所以加1,传入的是4,前面就拼接4个空格
    }
    if (typeof padding == 'string') {
        return padding + value
    }
    throw new Error('出现错误')
}

console.log(padLeft('Tmac',4));
console.log(padLeft('Tmac','2222222'));
// console.log(padLeft('Tmac',[21,32,222]));// 编译通过,运行报错


//可以使用联合类型

function padLeft1(value : string,padding : string|number) {
    if (typeof padding == 'number') {
        return Array(padding+1).join(' ') + value //Array是从0开始,所以加1,传入的是4,前面就拼接4个空格
    }
    if (typeof padding == 'string') {
        return padding + value
    }
    throw new Error('出现错误')
}

console.log(padLeft1('Tmac',4));
console.log(padLeft1('Tmac','2222222'));
// console.log(padLeft1('Tmac',[21,32,222]));//编译就不通过 