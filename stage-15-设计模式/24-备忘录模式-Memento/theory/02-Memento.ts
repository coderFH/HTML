// 备忘录对象,负责保存好记录,即Originator内部状态
class Memento {
    private state : string;

    constructor(state : string) {
        this.state = state;
    }

    getState() : string {
        return this.state;
    }
}

export {Memento}