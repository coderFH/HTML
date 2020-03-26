/*
类有两种类型
1.静态部分类型(其实就是类方法和类属性嘛) (接口不能描述静态部分)
2.实例类型
*/

interface ClockConstructor {
    // new (h : number,m : number)  我这里想约束你的类方法,约束不了
}


class Clock implements ClockConstructor {
    constructor(h : number,m : number) {//这个其实是个类方法,接口不能约束类方法
    }

    setTime(d : Date) : void {
        console.log(d);
    }
}

export{}