//创建节点构造函数
class Node {
    constructor(element) {
        this.element = element;
        this.prev = null; 
        this.next = null;
    }
}

// 创建双向链表的构造函数
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
}

//=======================================增============================================
//在尾部追加数据
DoublyLinkedList.prototype.append = function (element) {
    //1.根据元素创建节点
    let newNode = new Node(element);

    //2.判断列表是否为空列表
    if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    //3.length+1
    this.length++;
};

// 在任意位置插入数据
DoublyLinkedList.prototype.insert = function (position, element) {
    //1.判断越界问题
    if (position < 0 || position > this.length) return false;

    //2.创建新的节点
    let newNode = new Node(element);

    //3.判断插入的位置
    if (position === 0) { //在第一个位置插入数据
        //判断链表是否为空
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    } else if (position === this.length) { //插入到最后的情况
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    } else { //在中间位置插入数据
        //定义属性
        let index = 0;
        let current = this.head;
        let previous = null;
        //查找正确的位置
        while (index++ < position) {
            previous = current;
            current = current.next;
        }
        //交换节点的指向顺序
        newNode.next = current;
        newNode.prev = previous;
        current.prev = newNode;
        previous.next = newNode;
    }

    this.length++;
    return true;
};

//=======================================删============================================
// 根据位置删除对应的元素
DoublyLinkedList.prototype.removeAt = function (position) {
    //1.越界判断
    if (position < 0 || position >= this.length) return null;

    //2.判断是否只有一个节点
    let current = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        if (position === 0) {//判断是否删除的是第一个节点
            this.head.next.prev = null;
            this.head = this.head.next
        } else if (position === this.length - 1) { //最后节点
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        } else  {
            var index = 0;
            while (index++ < position) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
    }
    this.length -= 1;
    return current.data;
};

// 根据元素删除
DoublyLinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
};

//=======================================改============================================
// 根据元素删除
DoublyLinkedList.prototype.update = function (position,newData) {
    //1.越界判断
    if (position < 0 || position >= this.length) return false;

    //2.寻找正确的节点
    let current = this.head;
    let index = 0;
    while (index++ < position) {
        current = current.next;
    }
    //3.修改找到节点的信息
    current.element = newData;
    return true;
};

//=======================================查============================================
// 根据元素获取在链表中的位置
DoublyLinkedList.prototype.indexOf = function (element) {
    //1.定义变量保存信息
    var current = this.head;
    var index = 0;
    //2.查找正确的信息
    while (current) {
        if (current.element === element) {
            return index;
        }
        index++;
        current = current.next;
    }
    // 3.来到这个位置, 说明没有找到, 则返回-1
    return -1;
};

//获取某个位置的元素
DoublyLinkedList.prototype.get = function (position) {
    //1.越界判断
    if (position < 0 || position >= this.length) return null;

    //2.获取元素
    let current = this.head;
    let index = 0;

    while (index ++ < position) {
        current = current.next;
    }
    return current.element;
};

// 获取第一个元素
DoublyLinkedList.prototype.getHead = function () {
    return this.head.element;
};

// 获取最后一个元素
DoublyLinkedList.prototype.getTail = function () {
    return this.tail.element;
};

//=======================================其他============================================
// 判断是否为空
DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

// 获取链表长度
DoublyLinkedList.prototype.size = function () {
    return this.length;
};

//=======================================遍历============================================
// 正向遍历的方法
DoublyLinkedList.prototype.forwardString = function () {
    let current = this.head;
    let forwardStr = "";
    while(current) {
        forwardStr += "," + current.element;
        current = current.next;
    }
    return forwardStr.slice(1);
};

// 反向遍历的方法
DoublyLinkedList.prototype.reverseString = function () {
    var current = this.tail;
    var reverseStr = "";
    while (current) {
        reverseStr += "," + current.element;
        current = current.prev;
    }
    return reverseStr.slice(1);
};

// 实现toString方法
DoublyLinkedList.prototype.toString = function () {
    return this.forwardString();
};

//1.创建双向链表对象
let list = new DoublyLinkedList();

//2.追加元素
list.append('1');
list.append('2');
list.append('3');
list.append('4');
list.append('5');
list.append('6');



console.log(list.get(3));
list.update(4,'a');
list.removeAt(2);

console.log(list.toString());
console.log(list.forwardString());
console.log(list.reverseString());

list.insert(0,'z');
list.insert(3,'b');

console.log(list.indexOf('z'));
list.remove('b');

console.log(list.toString());

console.log(list.getHead());
console.log(list.getTail());

console.log(list.isEmpty());
console.log(list.size());


