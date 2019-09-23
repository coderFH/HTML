class Queue {
    constructor() {
        this.items = [];
    }

    /*
    * 向队列中添加一个元素
    * */
    enqueue(element) {
        this.items.push(element);
    }

    /*
    * 从队列中移除第一个元素
    * */
    dequeue() {
        return this.items.shift();
    }

    /*
    * 查看最开始的元素
    * */
    front() {
        return this.items[0];
    }

    /*
    * 查看队列是否为空
    * */
    isEmpty() {
        return this.items.length == 0;
    }

    /*
    * 查看队列中元素的个数
    * */
    size() {
        return this.items.length;
    }
}

//创建队列对象
const queue = new Queue();

//在队列中添加元素
queue.enqueue('abc');
queue.enqueue('cba');
queue.enqueue('nba');

//查看一下队列前端元素
console.log(queue.front());

//查看队列是否为空和元素个数
console.log(queue.isEmpty());
console.log(queue.size());

//从队列中删除元素
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue.isEmpty());
console.log(queue.size());

console.log('=========================================击鼓传花案例=========================================');
function passGame(nameList,num) {
    let queue = new  Queue();
    for (let i  = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    while (queue.size() > 1) {
        console.log(queue);
        for (let i = 1; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        //将第num个人,从队列中移除
        queue.dequeue();
    }

    //3.获取剩下的最后一个人
    console.log(queue.size());
    let endName = queue.dequeue();
    console.log(endName);

    console.log('最终留下的人是:' + endName);

    //4.获取该人在队列中的位置
    return nameList.indexOf(endName);
}

const names= ['1','2','3','4','5'];
const index = passGame(names,7);
console.log('最终位置:' + index);
