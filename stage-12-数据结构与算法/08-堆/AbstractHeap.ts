import {Heap} from './Heap'
import {Comparator} from '../04-树/Comparator'

abstract class AbstractHeap<E> implements Heap<E> {
    protected count : number = 0;
    protected comparator : Comparator<E>;
    constructor(compartor : Comparator<E>){
        this.comparator = compartor;
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    protected compare(e1 : E,e2 : E) : number {
        return this.comparator.compare(e1,e2);
    }

    abstract clear(): void;
    abstract add(element: E): void;
    abstract get(): E;
    abstract remove(): E;
    abstract replace(element: E): E;
} 

export {AbstractHeap}