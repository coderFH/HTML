class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
}

//======================================增============================================
//链表尾部追加元素方法 (头插)
LinkedList.prototype.appendFront = function (element) {
    let newNode = new Node(element);
    if (this.length === 0) {
        this.head = newNode;
    } else  {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
};

//链表尾部追加元素方法 (尾插)
LinkedList.prototype.appendTrail = function(element) {
    let newNode = new Node(element);
    if (this.length === 0) {
        this.head = newNode;
    } else  {
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        //到了最后为空的时候
        current.next = newNode;
    }
    this.length++;
};

//插入元素
LinkedList.prototype.insert = function(position,element) {
    //1.检测越界问题
    if (position < 0 || position > this.length) return false;

    //2.定义变量,保存信息
    let newNode = new Node(element);
    let current = this.head;
    let previous = null,index = 0;

    //3.判断是否是否在第一个插入
    if (position === 0) {
        newNode.next = current;
        this.head = newNode;
    } else {
        while (index++ < position) {
            previous = current;
            current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
    }
    this.length++;
    return true;
};

//=======================================删============================================'
//根据位置删除节点
LinkedList.prototype.removeAt = function(position) {
    // 1.检测越界问题
    if (position < 0 || position >= this.length) return null;

    //2.定义变量,保存信息
    let currnet = this.head;
    var previous = null;
    var index = 0;

    //3.判断是否是移除第一项
    if (position === 0) {
        this.head = currnet.next;
    } else {
        while (index++ < position) {
            previous = currnet;
            currnet = currnet.next;
        }
        previous.next = currnet.next;
    }
    this.length--;

    //返回移除的数据
    return  currnet.element;
};

// 根据元素删除信息
LinkedList.prototype.remove = function(element) {
    this.removeAt(this.indexOf(element));
};

//======================================改============================================
LinkedList.prototype.update = function(position,element) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
        current = current.next;
    }
    current.element = element;
    return true;
};

//======================================查============================================
//根据位置查找元素
LinkedList.prototype.get = function(position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;

    while (index++ < position) {
        current = current.next;
    }
    return current.element
};

//根据元素获取链表中的位置
LinkedList.prototype.indexOf = function(element) {
    let current = this.head, index = 0;

    while (current) {
        if (current.element === element) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
};

//获取第一个节点
LinkedList.prototype.getFirst = function() {
    return this.head.element;
};

//======================================其他方法============================================
//判断链表是否为空
LinkedList.prototype.isEmpty = function() {
    return this.length === 0;
};

//获取链表的长度
LinkedList.prototype.size = function() {
    return this.length;
};

LinkedList.prototype.toString = function () {
    //1.定义两个变量
    let currentNode = this.head;
    let listString = '';

    //2.循环获取链表中所有元素
    while (currentNode) {
        listString += ',' + currentNode.element;
        currentNode = currentNode.next;
    }

    //3.返回最终结果
    return listString;
};

//======================================验证============================================
const list = new LinkedList();

list.appendFront(50);
list.appendFront(40);
list.appendFront(30);
list.appendFront(20);
list.appendFront(10);

console.log(list.getFirst());
console.log(list.toString());

list.appendTrail(60);
list.appendTrail(70);
list.appendTrail(80);
list.appendTrail(90);
list.appendTrail(100);

console.log(list.toString());

list.insert(0,9);
list.insert(4,35);
list.insert(12,101);

console.log(list.toString());

console.log(list.isEmpty());
console.log(list.size());

console.log(list.removeAt(0));
console.log(list.removeAt(5));

console.log(list.indexOf(80));

list.remove(101);
console.log(list.toString());

console.log(list.get(3));

list.update(4,55);
console.log(list.toString());



