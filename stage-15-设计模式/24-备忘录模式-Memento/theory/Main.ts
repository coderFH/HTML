import { Originator } from "./01-Originator";
import { Caretaker } from "./03-Caretaker";

let originator = new Originator();
let caretaker = new Caretaker();

originator.setState("状态#1 攻击力100");
// 保存当前的状态
caretaker.add(originator.saveStateMemento());

originator.setState("状态#2 攻击力80");
caretaker.add(originator.saveStateMemento());

originator.setState("状态#3 攻击力50");
caretaker.add(originator.saveStateMemento());


console.log("当前的状态是: " + originator.getState());

// 希望得到状态1,将originator 恢复到状态1
originator.getStateFormMemento(caretaker.get(0));
console.log("恢复到状态 1 , 当前的状态是");
console.log("当前的状态是: " + originator.getState());



