import { ConcreteMediator } from "./01-ConcreteMediator";
import { Alarm } from "./03-Alarm";
import { CoffeeMachine } from "./04-CoffeeMachine";
import { TV } from "./06-TV";
import { Curtains } from "./05-Curtains";

// 创建一个中介者对象
let mediator = new ConcreteMediator();

// 创建Alarm 并且加入到 ConcreteMediator 对象的Map中
let alarm = new Alarm(mediator,"alarm");

let coffeeMachine = new CoffeeMachine(mediator,"coffeeMachine");

let curtains = new Curtains(mediator,"curtains");

let tv = new TV(mediator,"TV");

// 让闹钟发出消息
alarm.sendAlarm(0);
coffeeMachine.finishCoffee();
alarm.sendAlarm(1);


