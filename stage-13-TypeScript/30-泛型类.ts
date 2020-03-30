/*
类有两部分: 静态部分和实例部分
泛型类指的是实例部分的类型,所以类的静态属性不能使用这个泛型类
*/

class Add<T> {
    zeroValue!: T
    add(x: T, y: T) : T {
        return x
    }
}

//3.1 number类型
let a = new Add<number>()
a.zeroValue = 100

console.log(a.add(10,20),a.zeroValue);

let a1 = new Add<string>()
a1.zeroValue = "0"

console.log(a1.add("10","20"),a1.zeroValue);