import {Comparator} from '../04-树/Comparator'
import {PriorityQueue} from './PriorityQueue'

class PersonComparator implements Comparator<Person> {
    compare(e1: Person, e2: Person): number {
        return e1.boneBreak - e2.boneBreak; // 骨头断的越多,优先级越高,优先治疗
    }
}

class Person {
    name : string;
    boneBreak : number; 
    constructor(name : string, boneBreak : number) {
        this.name = name;
        this.boneBreak = boneBreak;
    }
}

function test1() {
    let p = new PriorityQueue(new PersonComparator());
    p.enQueue(new Person("jack",2));
    p.enQueue(new Person("rose",10));
    p.enQueue(new Person("jack",5));
    p.enQueue(new Person("james",15));

    while(!p.isEmpty()) {
        console.log(p.deQueue());
    }
}

test1();