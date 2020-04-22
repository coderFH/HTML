class Queue<E> {
    private list : Array<E>
    constructor() {
        this.list = new Array<E>()
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

let queue = new Queue<number>()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
console.log(queue.front())
console.log(queue)
console.log("size=",queue.size());

while(!queue.isEmpty()) {
    console.log(queue.deQueue());
}

queue.clear()
console.log(queue);
console.log("size=",queue.size());

export {Queue}