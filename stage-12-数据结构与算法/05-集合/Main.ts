import {LinkSet} from './02-LinkSet'
import {TreeSet} from './03-TreeSet'
import {Visitor } from './01-Set';
import {Comparator} from '../04-树/Comparator'

class SetVisitor<E> extends Visitor<E> {
    visit(element: E): boolean {
        console.log(element);
        return false;
    }
}

class NumberCompator implements Comparator<number> {
    compare(e1: number, e2: number): number {
        return e1 - e2;
    }
}

function test1() {
    let listSet = new LinkSet<number>();
    listSet.add(10);
    listSet.add(11);
    listSet.add(11);
    listSet.add(12);
    listSet.add(8);
    listSet.add(9);
    listSet.add(8);
    listSet.add(9);

    listSet.traversal(new SetVisitor<number>());
}

function test2() {
    let treeSet = new TreeSet<number>(new NumberCompator());
    treeSet.add(10);
    treeSet.add(11);
    treeSet.add(11);
    treeSet.add(12);
    treeSet.add(8);
    treeSet.add(9);
    treeSet.add(8);
    treeSet.add(9);

    treeSet.traversal(new SetVisitor<number>());
}


test2();