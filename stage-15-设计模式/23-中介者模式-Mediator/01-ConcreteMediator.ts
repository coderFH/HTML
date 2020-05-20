import { Mediator } from "./00-Mediator";
import { Colleague } from "./02-Colleague";
import { Alarm } from "./03-Alarm";
import { CoffeeMachine } from "./04-CoffeeMachine";
import { TV } from "./06-TV";
import { Curtains } from "./05-Curtains";

// 具体的中介者类
class ConcreteMediator extends Mediator {
    // 集合,放入所有的同事对象
    private colleagueMap : Map<string,Colleague>;
    private interMap : Map<string,string>

    constructor() {
        super();
        this.colleagueMap = new Map<string,Colleague>();
        this.interMap = new Map<string,string>();
    }
    
    register(colleagueName: string, colleage: Colleague): void {
        this.colleagueMap.set(colleagueName,colleage);
        if (colleage instanceof Alarm) {
            this.interMap.set("Alarm",colleagueName);
        } else if (colleage instanceof CoffeeMachine) {
            this.interMap.set("CoffeeMachine",colleagueName);
        } else if (colleage instanceof TV) {
            this.interMap.set("TV",colleagueName);
        } else if (colleage instanceof Curtains) {
            this.interMap.set("Curtains",colleagueName);
        }
    }

    //1. 根据得到消息,完成对应任务
    //2. 中介者在这个方法,协调各个具体的同事对象,完成任务
    getMessage(stateChange: number, colleagueName: string): void {
        if (this.colleagueMap.get(colleagueName) instanceof Alarm) {
            if (stateChange === 0) {
                (<CoffeeMachine>this.colleagueMap.get(this.interMap.get("CoffeeMachine")!)!).startCoffee();
                (<TV>this.colleagueMap.get(this.interMap.get("TV")!)!).startTV();
            } else if(stateChange === 1) {
                (<TV>this.colleagueMap.get(this.interMap.get("TV")!)!).stopTV();
            }
        } else if (this.colleagueMap.get(colleagueName) instanceof CoffeeMachine) {
            (<Curtains>this.colleagueMap.get(this.interMap.get("Curtains")!)!).upCurtains();
        } else if (this.colleagueMap.get(colleagueName) instanceof TV) { // 如果是TV发现消息
           
        } else if (this.colleagueMap.get(colleagueName) instanceof Curtains) {
           // 如果是以窗帘发出的消息,这里处理......
        }
    }

    sendMessage(): void {} 
}

export {ConcreteMediator}