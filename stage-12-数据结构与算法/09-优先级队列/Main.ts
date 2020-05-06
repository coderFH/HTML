import {Comparator} from '../04-树/Comparator'
import {PriorityQueue} from './PriorityQueue'

class Person implements Comparator<Person> {
    name : string;
    boneBreak : number; //骨头断的越多,优先级越高,优先治疗
    constructor(name : string, boneBreak : number) {
        this.name = name;
        this.boneBreak = boneBreak;
    }
    compare(e1: Person, e2: Person): number {
        return this.boneBreak - e2.boneBreak;
    }
}

function test1() {
    let p = new PriorityQueue();
}

test1();