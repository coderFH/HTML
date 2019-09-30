class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

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

};

// 在任意位置插入数据
DoublyLinkedList.prototype.insert = function (position, element) {

};

//=======================================删============================================
// 根据位置删除对应的元素
DoublyLinkedList.prototype.removeAt = function (position) {

};

// 根据元素删除
DoublyLinkedList.prototype.remove = function (element) {

};

//=======================================改============================================
// 根据元素删除
DoublyLinkedList.prototype.update = function (position,newData) {

};

//=======================================查============================================
// 根据元素获取在链表中的位置
DoublyLinkedList.prototype.indexOf = function (element) {
};

//获取某个位置的元素
DoublyLinkedList.prototype.get = function (position) {
};

// 获取第一个元素
DoublyLinkedList.prototype.getHead = function () {
};

// 获取最后一个元素
DoublyLinkedList.prototype.getTail = function () {

};

//=======================================其他============================================
// 判断是否为空
DoublyLinkedList.prototype.isEmpty = function () {
};

// 获取链表长度
DoublyLinkedList.prototype.size = function () {
};

//=======================================遍历============================================
// 正向遍历的方法
DoublyLinkedList.prototype.forwardString = function () {
};

// 反向遍历的方法
DoublyLinkedList.prototype.reverseString = function () {
};

// 实现toString方法
DoublyLinkedList.prototype.toString = function () {

};
