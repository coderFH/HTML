import {ArrayList} from "./ArrayList"
import {SingleLinkedList} from "./LinkedList"

class Person {
    constructor(public name : string) {}
}

let array1 = new ArrayList<any>(20);
array1.addLast(1);
array1.addLast(2);
array1.addLast(3);
array1.addLast(4);
array1.add(0,true);
array1.add(1,"你好");
array1.add(5,new Person('哈哈'))
array1.add(2,5);
array1.add(3,6)
console.log(array1.indexOf(new Person('哈哈')));
console.log(array1.indexOf(new Person('12')));
console.log(array1.toString());

console.log("======================================");

let arr = new ArrayList<number>(10);

for (let i = 0; i < 40; i++) {
    arr.addLast(i);
}
console.log(arr.toString());

for (let i = 0; i < 40; i++) {
    arr.remove(0);
}
console.log(arr.toString());

for (let i = 0; i < 10; i++) {
    arr.addLast(i);
}
arr.add(6,7);
console.log(arr.toString());

console.log(arr.remove(0));
console.log(arr.toString());

console.log(arr.remove(2));
console.log(arr.toString());

console.log(arr.set(0,1));
console.log(arr.toString());

console.log(arr.set(3,6));
console.log(arr.toString());

console.log(arr.get(3));
console.log(arr.indexOf(7));
console.log(arr.toString());
arr.clear();
console.log(arr.toString());
console.log("======================================");


let array2 = new SingleLinkedList<number>();
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        array2.addLast(i);
    }
}
console.log(array2.toString()); //size= 5,[0,2,4,6,8]
array2.add(1,1);
console.log(array2.toString());//size= 6,[0,1,2,4,6,8]
array2.add(2,3);
console.log(array2.toString());//size= 7,[0,1,3,2,4,6,8]
array2.add(3,4);
console.log(array2.toString());//size= 8,[0,1,3,4,2,4,6,8]

array2.remove(0);
console.log(array2.toString());//size= 7,[1,3,4,2,4,6,8]

console.log(`indexOf:${array2.indexOf(8)}`);
console.log(`get:${array2.get(5)}`);  //6
console.log(`set:${array2.set(4,7)}`); //

console.log(array2.toString());//size= 7,[1,3,4,2,7,6,8]
array2.clear();
console.log(array2.toString());//size= 0,[]
