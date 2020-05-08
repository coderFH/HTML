/*
    1.这种修改方法没有对原来的类做大的修改,只是增加方法
    2.这里虽然没有在类这个级别上遵守单一职责原则,但是在方法级别上,仍然遵守单一职责
*/
// 一个交通工具类
class Vehicle {
    runRoad(vehicle : string) : void {
        console.log(vehicle + '在公路上跑');
    }

    runAir(vehicle : string) : void {
        console.log(vehicle + '在天空运行');
    }

    runWater(vehicle : string) : void {
        console.log(vehicle + '在水中运行');
    }
}

let v = new Vehicle();
v.runRoad("摩托车");
v.runAir("飞机");
v.runWater("轮船");

export {Vehicle}