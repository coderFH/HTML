class CircleQueue<E> {
    private list : Array<E>
    private size : Number = 0
    private static DEFAULT_CAPACITY = 10
    
    constructor() {
        this.list = new Array<E>(CircleQueue.DEFAULT_CAPACITY)
    }

    // 元素的数量
    size() : Number {
        return this.list.length;
    }

    // 是否为空
    isEmpty() : Boolean {
        return this.list.length === 0;
    }

    // 清空
    clear() : void {
        this.list.length = 0;
    }

    // 入队
    enQueue(element : E) {
        this.list.push(element)
    }

    // 出队
    deQueue() : E {
        return this.list.shift();
    }

    // 获取队列的头元素
    front() : E {
        return this.list[0];
    }
}

export {CircleQueue}