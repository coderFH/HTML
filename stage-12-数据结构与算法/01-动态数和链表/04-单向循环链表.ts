import {AbstractList} from "./AbstractList"

class Node<E> {
    element : E;
    next : Node<E>;

    constructor(element : E, next : Node<E>) {
        this.element = element;
        this.next = next;
    }    
}

class SingleCircleLinkedList<E> extends AbstractList<E> {
    private first : Node<E>;

    //增
    add(index: number, element: E): void {
        this.rangeCheckForAdd(index);
        if (index === 0) { //说明是往头部添加数据
            let newFirstNode = new Node(element,this.first);
            //如果此时链表没有元素,则这个新的Node也是最后一个Node,否则就取出当前链表的最后一个Node
            let lastNode = (this.count == 0) ? newFirstNode : this.node(this.count - 1);
            lastNode.next = newFirstNode; //修改最后一个Node的next的指向
            this.first = newFirstNode;  // first指向新的Node
        } else {
            let preNode = this.node(index - 1);
            preNode.next = new Node(element,preNode.next);
        }
        this.count++;
    }

    //删
    clear(): void {
        this.count = 0;
        this.first = null;
    }

    remove(index: number): E {
        this.rangeCheck(index);
        let delNode : Node<E> = this.first;
        if (index === 0) { // 如果删除的是第一个节点
            if (this.count == 1) { //只有一个节点的时候,直接让first = null
                this.first = null;
            } else {
                let lastNode = this.node(this.count - 1);
                this.first = this.first.next;
                lastNode.next = this.first;
            }
        } else {
            let prev = this.node(index - 1);
            delNode = prev.next;
            prev.next = delNode.next;
        }
        this.count--;
        return delNode.element;
    }

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

    private node(index : number) : Node<E> {
        this.rangeCheck(index);
        let node = this.first;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
}

export {SingleCircleLinkedList}