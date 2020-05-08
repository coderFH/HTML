/*
    1.遵守了单一职责原则
    2.但是这样做的改动很大,即将类分解,同时修改调用的代码
*/
// 一个交通工具类
class RoadVehicle {
    run(vehicle : string) : void {
        console.log(vehicle + '在公路上跑');
    }
}

class AirVehicle {
    run(vehicle : string) : void {
        console.log(vehicle + '在天空运行');
    }
}

class WaterVehicle {
    run(vehicle : string) : void {
        console.log(vehicle + '在水中运行');
    }
}

let v = new RoadVehicle();
v.run("摩托车");

let a = new AirVehicle();
a.run("飞机");

let w = new WaterVehicle();
w.run("轮船");

export {RoadVehicle,AirVehicle}