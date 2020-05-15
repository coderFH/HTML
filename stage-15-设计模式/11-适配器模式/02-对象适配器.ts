// 被适配的类
class Voltage220V {
    //输出220v的电压
    output220V() : number {
        let src = 220;
        console.log("电压=" + src + "伏");
        return src; 
    }
}

// 适配接口
interface IVoltage5V {
    output5V() : number;
}

// 适配器类,不继承被适配的类,改成聚合关系
class VoltageAdapter implements IVoltage5V {
    voltage220V : Voltage220V = null;

    constructor(voltage220V : Voltage220V) {
        this.voltage220V = voltage220V;
    }

    output5V(): number {
        let desV = 0;
        if (this.voltage220V !== null) {
            let srcV = this.voltage220V.output220V(); //获取220V 电压
            desV = srcV / 44; //转成5v
            console.log("电压=" + desV + "伏");
        }
        return desV; 
    }
}

class Phone {
    //充电的方法
    charging(iVoltage5V : IVoltage5V) : void {
        if (iVoltage5V.output5V() == 5) {
            console.log("电压为5V,可以充电");
        } else if (iVoltage5V.output5V() > 5) {
            console.log("电压大于5V,不能充电....");
        }
    } 
}

function test1() {
    console.log("=== 对象适配器模式 =====");
    let p = new Phone();
    p.charging(new VoltageAdapter(new Voltage220V()));
}

test1();

export {}