import {Set,Visitor} from '../05-集合/01-Set'
import {Map,MapVisitor} from './01-Map'
import {TreeMap} from './02-TreeMap'
import {Comparator} from '../04-树/Comparator'

class TreeSet<E> implements Set<E> {
    map : TreeMap<E,Object>

    constructor(comparator : Comparator<E>) {
        this.map = new TreeMap(comparator);
    }  

    size(): number {
        return this.map.size();
    }

    isEmpty(): boolean {
       return this.map.isEmpty();
    }

    clear(): void {
        return this.map.clear();
    }

    contains(element: E): boolean {
        return this.map.containsKey(element);
    }

    add(element: E): void {
        this.map.put(element,null);
    }

    remove(element: E): void {
        this.map.remove(element);
    }

    traversal(visitor: Visitor<E>): void {

    }
}

export {TreeSet}