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

// 适配器类
class VoltageAdapter extends  Voltage220V implements IVoltage5V {
    output5V(): number {
        let srcV = this.output220V();
        let desV = srcV / 44; //转成5v
        console.log("电压=" + desV + "伏");
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
    console.log("=== 类适配器模式 =====");
    let p = new Phone();
    p.charging(new VoltageAdapter());
}

test1();

export {}
