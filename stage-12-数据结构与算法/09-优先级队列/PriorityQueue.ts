import {BinaryHeap} from '../08-堆/BinaryHeap'
import {Comparator} from '../04-树/Comparator'

class PriorityQueue<E> {
    heap : BinaryHeap<E>;
    constructor(compartor : Comparator<E>) {
        this.heap = new BinaryHeap<E>(compartor);
    }

    size() : number {
        return this.heap.size();
    }

    isEmpty() : boolean {
        return this.heap.isEmpty();
    }
    
    clear() : void {
        this.heap.clear();
    }

    enQueue(element : E) {
        this.heap.add(element);
    }

    deQueue() : E {
        return this.heap.remove();
    }

    front() : E {
        return this.heap.get();
    }
}

export {PriorityQueue}