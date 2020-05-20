import { Colleague } from "./02-Colleague";
import { Mediator } from "./00-Mediator";

class TV extends Colleague {
    constructor(mediator : Mediator,name : string) {
        super(mediator,name);
        // 在创建Alarm同事对象时,将自己放入到ConcreteMediator 对象中
        mediator.register(name,this);
    }

    startTV() : void{
        console.log("这个时间打开电视");
    }

    stopTV(): void {
        console.log("关闭电视");
    }

    sendMessage(stateChange: number): void {
        //调用的中介者对象的getMessage
        this.getMediator().getMessage(stateChange,this.name);
    }
}

export {TV}