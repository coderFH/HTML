import {AbstractList} from "./AbstractList"

class Node<E> {
    prev : Node<E>;
    element : E;
    next : Node<E>;

    constructor(prev : Node<E>, element : E, next : Node<E>) {
        this.prev = prev;
        this.element = element;
        this.next = next;
    }    
}

class DoubleLinkedList<E> extends AbstractList<E> {
    private first : Node<E> = null;
    private last : Node<E> = null;

    //增
    add(index: number, element: E): void {
        this.rangeCheckForAdd(index);
        if (index === this.count) { // 如果是向最后位置添加
            let oldLast = this.last;
            this.last = new Node(oldLast,element,null)
            if (oldLast === null) { //此时链表如果是空,是链表添加的第一个元素
                this.first = this.last;
            } else {
                oldLast.next = this.last;
            }
        } else {
            let next = this.node(index);
            let prev = next.prev;
            let current = new Node(prev,element,next);
            next.prev = current;
            if (prev === null) { //如果是往第一个节点插入
                this.first = current
            } else {
                prev.next = current;  
            }
        }
        this.count++;
    }

    //删
    clear(): void {
        let node = this.first;
        for (let index = 0; index < this.count; index++) {
            let tmp = node;
            node = node.next;
            tmp.prev = null;
            tmp.next = null;
        }
        this.count = 0;
        this.first = null;
        this.last = null;
    }

    remove(index: number): E {
        this.rangeCheck(index);
        let node = this.node(index)
        let prev = node.prev;
        let next = node.next;

        if (prev === null) {
            this.first = next;
        } else {
            prev.next = next;
        }
       
        if (next === null) {
            this.last = prev;
        } else {
            next.prev = prev;
        }
        this.count--;
        return node.element;
    }

    private node(index : number) : Node<E> {
        this.rangeCheck(index);
        if (index < (this.count >> 1)) {
            let node = this.first;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        } else {
            let node = this.last;
            //从后开始找的情况下,也就是从最后一个元素往前遍历,
            //而最后一个元素的下标其实就是是count-1
            for (let i = this.count - 1; i > index; i--) {
               node = node.prev                
            }
            return node;
        }
    }

    //================= 以下代码相对于之前不用更改  ====================
    //改
    set(index: number, element: E): E {
        let node = this.node(index);
        let oldElement = node.element;
        node.element = element;
        return oldElement;
    }

    //查
    get(index: number): E {
        let node = this.node(index);
        return node.element
    }

    indexOf(element: E): number {
        let node = this.first;
        for (let i = 0; i < this.count; i++) {
            if (element instanceof Object) {
                if (this.isObjectValueEqual(element,node.element)) return i;
                node = node.next;
            } else {
                if (node.element === element) return i;
                node = node.next;
            }
        }
        return AbstractList.ELEMENT_NOT_FOUND;
    }

    //打印
    toString(): string {
        let resultString = "size= " + this.count + ',[';
        let node = this.first
        for (let i = 0; i < this.count; i++) {
            if (i !== 0) {
                resultString =  resultString + ',';
            }
            resultString = resultString + node.element;
            node = node.next;
        }
        resultString = resultString + ']';
        return resultString;
    }
}

export {DoubleLinkedList}