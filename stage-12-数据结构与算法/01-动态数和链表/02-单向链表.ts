import {AbstractList} from "./AbstractList"

class Node<E> {
    element : E;
    next : Node<E>;

    constructor(element : E, next : Node<E>) {
        this.element = element;
        this.next = next;
    }    
}

class SingleLinkedList<E> extends AbstractList<E> {
    private first : Node<E>;

    //增
    add(index: number, element: E): void {
        this.rangeCheckForAdd(index);
        if (index === 0) {
            this.first = new Node(element,this.first);
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
        if (index === 0) {
            this.first = this.first.next;
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

export {SingleLinkedList}