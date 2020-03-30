/*
我们可以声明一个类型参数,且他被另一个类型参数所约束
比如: 我们想要用属性名从对象里获取这个属性,并且我们想要确保这个属性存在于对象'obj'上,因此我们需要
在这两个类型之间使用约束
keyof是索引类型查询操作符
keyof T
*/

//我要保证我的key一定要在你的obj中存在
function getProperty<T,K extends keyof T>(obj : T,key : K) {
    return obj[key]
}
let person = {name : "t-mac",age : 20, sex : "man"}
// getProperty(person,"123") //报错,传入的值key必须在
getProperty(person,"name") 

export{}
