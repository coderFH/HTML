import {Set,Visitor} from './01-Set'
import {DoubleLinkedList} from '../01-动态数和链表/03-双向链表'

class LinkSet<E> implements Set<E> {
    list : DoubleLinkedList<E> = new DoubleLinkedList()

    size(): number {
       return this.list.size();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    clear(): void {
        this.list.clear;
    }

    contains(element: E): boolean {
        return this.list.contains(element);
    }

    add(element: E): void {
        let index = this.list.indexOf(element);
        if (index !== DoubleLinkedList.ELEMENT_NOT_FOUND) { //存在就覆盖
            this.list.set(index,element);
        } else { // 不存在就添加
            this.list.addLast(element);
        }      
    }

    remove(element: E): void {
        let index = this.list.indexOf(element);
        if (index !== DoubleLinkedList.ELEMENT_NOT_FOUND) {
            this.list.remove(index);
        }
    }

    traversal(visitor: Visitor<E>): void {
        if (visitor === null) return;

        let size = this.list.size();
        for (let i = 0; i < size; i++) {
            if(visitor.visit(this.list.get(i))) return;
        }
    }
}

export {LinkSet}