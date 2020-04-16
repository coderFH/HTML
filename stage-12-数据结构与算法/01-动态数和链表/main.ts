import {List} from "./List"
import {Asserts} from "./Asserts"
import {AbstractList} from "./AbstractList"

import {ArrayList} from "./01-动态数组"
import {SingleLinkedList} from "./02-单向链表"
import {DoubleLinkedList} from "./03-双向链表"
import {SingleCircleLinkedList} from "./04-单向循环链表"
import {DoubleCircleLinkedList} from  "./05-双向循环链表"
import {JosephCricleLinkedList} from "./06-约瑟夫环问题"


function testList(list : List<number>) : void {
    list.addLast(11);
    list.addLast(22);
    list.addLast(33);
    list.addLast(44);
    list.add(0,55); // [55, 11, 22, 33, 44]
    list.add(2,66); // [55, 11, 66, 22, 33, 44]
    list.add(list.size(),77); // [55, 11, 66, 22, 33, 44, 77]

    list.remove(0); // [11, 66, 22, 33, 44, 77]
    list.remove(2); // [11, 66, 33, 44, 77]
    list.remove(list.size()-1); // [11, 66, 33, 44]

    Asserts.test(list.indexOf(44) === 3);
    Asserts.test(list.indexOf(22) == AbstractList.ELEMENT_NOT_FOUND);
	Asserts.test(list.contains(33));
	Asserts.test(list.get(0) == 11);
	Asserts.test(list.get(1) == 66);
	Asserts.test(list.get(list.size() - 1) == 44);

    console.log(list.toString());  
    
    list.clear();

    console.log(list.toString());
}

// testList(new ArrayList<number>(10)); // 动态数组
// testList(new SingleLinkedList());    // 单向链表
// testList(new DoubleLinkedList());    // 双向链表
// testList(new SingleCircleLinkedList()); // 单向循环链表
testList(new DoubleCircleLinkedList()); // 双向循环链表

// ================== 测试约瑟夫环问题 =======
function josephus() : void {
    let list = new JosephCricleLinkedList<number>();
    for (let i = 1; i <= 8; i++) {
       list.addLast(i);
    }

    list.reset(); // 指向头结点（指向1)

    while(!list.isEmpty()) {
        list.next();
        list.next();//每数1,2,3 然后数到3的移除 ,所以两部next就够了
        console.log(list.removeElement());
    } 
}
josephus();

