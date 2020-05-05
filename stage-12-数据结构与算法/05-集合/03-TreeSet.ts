import {Set,Visitor} from './01-Set'
import {RBTree} from '../04-树/06-红黑树(继承二叉搜索树)'
import {Comparator} from '../04-树/Comparator'

class TreeSet<E> implements Set<E> {

    tree : RBTree<E>
    constructor(comparator : Comparator<E>) {
        this.tree = new RBTree(comparator);
    }  

    size(): number {
        return this.tree.size();
    }

    isEmpty(): boolean {
       return this.tree.isEmpty();
    }

    clear(): void {
        return this.tree.clear();
    }

    contains(element: E): boolean {
        return this.tree.contains(element);
    }

    add(element: E): void {
        this.tree.add(element);
    }

    remove(element: E): void {
        this.tree.remove(element);
    }

    traversal(visitor: Visitor<E>): void {
        this.tree.inOrder(visitor);
    }
}

export {TreeSet}