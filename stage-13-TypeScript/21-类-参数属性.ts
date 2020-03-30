/*
参数属性可以方便让我们在一个地方定义并初始化一个成员
1.声明和赋值合并至一处
2.参数属性通过给构造函数钱添加一个访问限定符来声明
*/

// class Person {
//     readonly name : string
//     constructor(name : string) {
//         this.name = name
//     }
// }
//上面的这种写法,每次都需要声明一个变量,然后在构造函数中赋值,很麻烦,所以可以优化成下面写法
class Person {
    constructor(public name : string) {}
}

let p = new Person("小明")
p.name = "小刚"
console.log(p.name);

export {}

