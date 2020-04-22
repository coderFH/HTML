class Deque<E> {
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

    // 从队尾入队
    enQueueRear(element : E) {
        this.list.push(element)
    }

    // 从队头出队
    deQueueFront() : E {
        return this.list.shift();
    }

    // 从队头入队
    enQueueFront(element : E) {
        this.list.unshift(element)
    }

    // 从队尾出队
    deQueueRear() : E {
        return this.list.pop();
    }

    // 获取队列的头元素
    front() : E {
        return this.list[0];
    }

    // 获取队列的尾元素
    rear() : E {
        return this.list[this.list.length - 1]
    }
}

let queue = new Deque<number>()
queue.enQueueRear(1)
queue.enQueueRear(2)
queue.enQueueRear(3)
queue.enQueueRear(4)
console.log(queue)
queue.enQueueFront(5)
queue.enQueueFront(6)
queue.enQueueFront(7)
queue.enQueueFront(8)
console.log(queue)
console.log("size=",queue.size());

while(!queue.isEmpty()) {
    console.log(queue.deQueueRear());
}

queue.enQueueRear(1)
queue.enQueueRear(2)
queue.enQueueRear(3)
queue.enQueueRear(4)
console.log(queue)
queue.enQueueFront(5)
queue.enQueueFront(6)
queue.enQueueFront(7)
queue.enQueueFront(8)
console.log(queue)
console.log("size=",queue.size());
while(!queue.isEmpty()) {
    console.log(queue.deQueueFront());
}

queue.clear()
console.log(queue);
console.log("size=",queue.size());

export {Deque}