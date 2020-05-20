import { Colleague } from "./02-Colleague";
import { Mediator } from "./00-Mediator";

class Curtains extends Colleague {
    constructor(mediator : Mediator,name : string) {
        super(mediator,name);
        // 在创建Alarm同事对象时,将自己放入到ConcreteMediator 对象中
        mediator.register(name,this);
    }

    upCurtains() {
        console.log("开始降下窗帘");
    }

    sendMessage(stateChange: number): void {
        //调用的中介者对象的getMessage
        this.getMediator().getMessage(stateChange,this.name);
    }
}

export {Curtains}