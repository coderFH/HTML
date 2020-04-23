class CircleDeque<E> {
    private static DEFAULT_CAPACITY = 10

    private list : Array<E>
    private count : number = 0
    private head : number = 0 //始终指着队头的位置
    
    constructor() {
        this.list = new Array<E>(CircleDeque.DEFAULT_CAPACITY)
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

    // 从队尾入队
    enQueueRear(element : E) {
        this.ensureCapacity(this.count + 1);
        this.list[this.index(this.count)] = element;
        this.count++;
    }

    // 从队头出队
    deQueueFront() : E {
        let frontElement = this.list[this.head];
        this.list[this.head] = null;
        this.head = this.index(1);
        this.count--;
        return frontElement;
    }

    // 从队头入队
    enQueueFront(element : E) {
        this.ensureCapacity(this.count + 1);
        this.head = this.index(-1)
        this.list[this.head] = element;
        this.count++;
    }

    // 从队尾出队
    deQueueRear() : E {
        let rearIndex = this.index(this.count - 1);
        let rear = this.list[rearIndex];
        this.list[rearIndex] = null;
        this.count--;
        return rear;
    }

    // 获取队列的头元素
    front() : E {
        return this.list[this.head];
    }

    // 获取队列的尾元素
    rear() : E {
        return this.list[this.index(this.count-1)];
    }

    private index(index : number) : number {
        //正常情况下,索引的转换这么写就行,但是取模是很耗费性能的,所以用下面的写法
        // return (this.head + index) % this.list.length;
        index += this.head;
        if (index < 0) {
            return index + this.list.length;
        }
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

let queue = new CircleDeque<number>();
//                                        5 4 3 2 1  100 101 102 103 104 
//扩容(往头部添加后6,7,8  其实是跑到了后边)     5 4 3 2 1  100 101 102 103 104 105 106 8 7 6 
//再次扩容(往头部添加后9,10 其实是跑到了后边)    8 7 6 5 4 3 2 1  100 101 102 103 104 105 106 107 108 109 null null 10 9 尾
for (let i = 0; i < 10; i++) {
    queue.enQueueFront(i + 1);
    queue.enQueueRear(i + 100);
}

// 头 null 7 6  5 4 3 2 1  100 101 102 103 104 105 106 null null null null null null null 尾
for (let i = 0; i < 3; i++) {
    queue.deQueueFront();
    queue.deQueueRear();
}

// 头 11 7 6  5 4 3 2 1  100 101 102 103 104 105 106 null null null null null null 12 尾
queue.enQueueFront(11);
queue.enQueueFront(12);
console.log(queue);

while (!queue.isEmpty()) {
    console.log(queue.deQueueFront());
}

export {CircleDeque}