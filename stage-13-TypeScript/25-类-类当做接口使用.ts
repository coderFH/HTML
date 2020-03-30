/*
把类当做接口使用
类定义会创建两个东西,类的实例类型和一个构造函数
因为类可以创建出类型,所以能够在允许使用接口的地方使用类
*/
class Point {
    x : number = 0
    y : number = 0
}

interface Point3D extends Point {
    z : number

}

let p : Point3D = {x : 10, y : 20, z : 100}

export{}