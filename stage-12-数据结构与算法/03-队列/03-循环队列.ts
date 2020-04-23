class CircleQueue<E> {
    private static DEFAULT_CAPACITY = 10

    private list : Array<E>
    private count : number = 0
    private head : number = 0 //始终指着队头的位置
    
    constructor() {
        this.list = new Array<E>(CircleQueue.DEFAULT_CAPACITY)
    }

    // 元素的数量
    size() : Number {
        return this.count;
    }

    // 是否为空
    isEmpty() : Boolean {
        return this.count === 0;
    }

    // 清空
    clear() : void {
        this.list.length = 0;
        this.count = 0;
        this.head = 0;
    }

    // 入队
    enQueue(element : E) {
        /* 
        null null 1 2 3
            此时 head = 2
            count = 3
            (2 + 3) % 5(数组的长度) = 0 
            所以会在0这个位置添加新元素 以此实现循环队列
        */
        this.ensureCapacity(this.count + 1);
        // this.list[(this.head+this.count)%this.list.length] = element;
        this.list[this.index(this.count)] = element;
        this.count++;
    }

    // 出队
    deQueue() : E {
        /*
            1 null null null null 5
            此时head 在3
            head++的时候要考虑回到1的情况
            所以需要 this.head = (this.head + 1) % this.list.length;
            (5 + 1) % 6 = 0
        */
        let frontElement = this.list[this.head];
        this.list[this.head] = null;
        // this.head = (this.head + 1) % this.list.length;
        this.head = this.index(1);
        this.count--;
        return frontElement;
    }

    // 获取队列的头元素
    front() : E {
        return this.list[this.head];
    }

    private index(index : number) : number {
        //正常情况下,索引的转换这么写就行,但是取模是很耗费性能的,所以用下面的写法
        // return (this.head + index) % this.list.length;
        index += this.head;
        return index - (index >= this.list.length ? this.list.length : 0);
    }

    private ensureCapacity(capacity : number) : void {
        let oldCapacity = this.list.length;
        if (oldCapacity >= capacity) return;

        // 新容量为旧容量的1.5倍
        let newCapacity = oldCapacity + (oldCapacity >> 1);
        let newElements = new Array<E>(newCapacity);

        for (let i = 0; i < this.count; i++) {
            newElements[i] = this.list[this.index(i)];
        }
        this.list = newElements
        
        //重置front
        this.head = 0
    }
}

let queue = new CircleQueue<number>();
// 0 1 2 3 4 5 6 7 8 9
for (let i = 0; i < 10; i++) {
    queue.enQueue(i);
}
console.log(queue);

// null null null null null 5 6 7 8 9
for (let i = 0; i < 5; i++) {
    queue.deQueue();
}
console.log(queue);

// 15 16 17 18 19 5 6 7 8 9
for (let i = 15; i < 23; i++) {
    queue.enQueue(i);
}
console.log(queue);

while (!queue.isEmpty()) {
    console.log(queue.deQueue());
}

console.log(queue);

export {CircleQueue}