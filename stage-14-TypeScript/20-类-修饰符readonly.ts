/*
1.可以使用readonly关键字将属性设置为只读的
2.只读属性必须在声明时或者构造函数里被初始化
*/

class Person {
    readonly name : string
    constructor(name : string) {
        this.name = name
    }
}

let p = new Person("T-mac")
// p.name = "tracy"   //报错,只读的

export{}