import { Memento } from "./02-Memento";

// 守护者对象,负责保存多个备忘录对象
class Caretaker {
    // 在 List 集合中会有很多的备忘录对象
    private mementoList = new Array<Memento>();

    add(memento : Memento) : void {
        this.mementoList.push(memento);
    }

    // 获取到第index个Originator的备忘录对象(即保存状态)
    get(index : number) : Memento {
        return this.mementoList[index];
    }
}

export {Caretaker}