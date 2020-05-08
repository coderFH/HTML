/*
    很明显,所有的交通工具都是在公路上跑,所以违反了单一职责原则
*/
// 一个交通工具类
class Vehicle {
    run(vehicle : string) : void {
        console.log(vehicle + '在公路上跑');
    }
}

let v = new Vehicle();
v.run("摩托车");
v.run("轮船");
v.run("飞机");

export {Vehicle}