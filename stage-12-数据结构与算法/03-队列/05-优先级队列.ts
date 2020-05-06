class QueueElement<E> {
    element : E
    priority : number
    constructor(element : E,priority : number) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue<E> {
    private list : Array< QueueElement<E> >
    constructor( ) {
        this.list = new Array< QueueElement<E> >()
    }

    //添加元素的方法
    enqueue(element : E,priority : number) : void {
        //1.根据传入的元素,创建新的QueueElement
        let queueElement = new QueueElement(element,priority);

        //2.获取传入元素应该在的正确位置
        if (this.isEmpty()) {
            this.list.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < this.list.length; i++) {
                //注意:我们这里是数字越小, 优先级越高
                if (queueElement.priority < this.list[i].priority) {
                    this.list.splice(i, 0, queueElement);
                    added = true;
                    break
                }
            }
            if (!added) {
                this.list.push(queueElement);
            }
        }
    };
    
    // 删除元素的方法
    dequeue() : QueueElement<E> {
        return this.list.shift()
    };
    
    // 获取前端的元素
    front() : QueueElement<E> {
        return this.list[0]
    };

    // 查看元素是否为空
    isEmpty() : boolean {
        return this.list.length === 0
    };

    // 获取元素的个数
    size() : number {
        return this.list.length
    };
}

//创建优先队列对象
let pQueue = new PriorityQueue();

//添加元素
pQueue.enqueue(333, 10);
pQueue.enqueue("cba", 5);
pQueue.enqueue(123, 12);
pQueue.enqueue("mba", 3);

//遍历所有的元素
var size = pQueue.size();
for (var i = 0; i < size; i++) {
    let item = pQueue.dequeue();
    console.log(item.element + "-" + item.priority)
}

export {PriorityQueue}