import { Colleague } from "./02-Colleague";
import { Mediator } from "./00-Mediator";

class CoffeeMachine extends Colleague {
    constructor(mediator : Mediator,name : string) {
        super(mediator,name);
        // 在创建Alarm同事对象时,将自己放入到ConcreteMediator 对象中
        mediator.register(name,this);
    }

    startCoffee() {
        console.log("开始制作咖啡");
    }

    finishCoffee() {
        console.log("正在制作咖啡,请等候5分钟.....");
        console.log("咖啡制作好了");
        this.sendMessage(0);
    }

    sendMessage(stateChange: number): void {
        //调用的中介者对象的getMessage
        this.getMediator().getMessage(stateChange,this.name);
    }
}

export {CoffeeMachine}