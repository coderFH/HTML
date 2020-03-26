//1.var 和 let
var s : string = "hello"
let s1 : string = 'world'

//块级作用域
function xx(flag : boolean) : number {
    let a = 99
    if(flag) {
        let b = a + 1
        var c = a + 1 
        return b
    }
    return 0
    // return b //let 有块级作用域,b已经没有了
    // return c  // c就没有块级作用域的问题,在js中可以返回,var就是个大bug,以后都很少使用了(只针对js,swift中var是变量)
}
xx(true)

//2.const声明常量
const CAT_NAME : string = '狸花猫'
// CAT_NAME = "哈哈哈"

const CAT = {
    name : "小白",
    age : 8
}

// CAT = {
//     name : "小灰",
//     age : 1
// }

//解构
//数组的解构
let numArr1 : number[] = [1,2]
let [one,two] = numArr1;
console.log(one,two);

let numArr2 : number[] = [1,2]
let [o,t] = numArr2;
//变换
[o,t] = [t,o]

let [first,...reset] = [1,2,3,4,5]
console.log(first);
console.log(reset);

//对象的解构
interface Person {
    personName : string,
    personAge : number,
    personSex : string
}

let person : Person = {
    personName : "小白",
    personAge : 18,
    personSex : 'girl'
}

let {personName,personAge,personSex} = person
console.log(personName,personAge,personSex);

export{}