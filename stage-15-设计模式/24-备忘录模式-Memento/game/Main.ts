import { GameRole } from "./01-GameRole";
import { Caretaker } from "./03-Caretaker";

let gameRole = new GameRole();
gameRole.vit = 100;
gameRole.def = 100;

console.log("和boss大战前的状态");
gameRole.display();

// 把当前状态保存caretaker
let caretaker = new Caretaker();
caretaker.memento = gameRole.createMemento();

console.log("和boss大战~~~~");
gameRole.vit = 30;
gameRole.def = 30;
gameRole.display();

console.log("大战后,使用备忘录将对象恢复到战前");
gameRole.recoverGameRoleFromMemento(caretaker.memento);
console.log("恢复后的状态");
gameRole.display();




