import { SoyaMilk } from "./01-SoyaMilk";

//花生豆浆
class PeanutSoyaMilk extends SoyaMilk {
    // 添加不同的配料,抽象方法,子类具体实现
    addCondiments() : void {
        console.log("加入上好的花生");
    }  
}

export {PeanutSoyaMilk}