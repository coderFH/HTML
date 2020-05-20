import { Memento } from "./02-Memento";

// 对象(需要保存状态的对象)
class Originator {
    private state : string; // 状态信息

    getState() : string {
        return this.state;
    }

    setState(state : string) {
        this.state = state;
    }

    // 编写一个方法,可以保存一个状态对象Memento
    // 因此编写一个方法,返回Memento
    saveStateMemento() : Memento {
        return new Memento(this.state);
    }

    // 通过备忘录对象,恢复状态
    getStateFormMemento(memento : Memento) {
        this.state = memento.getState();
    }
}


export {Originator}