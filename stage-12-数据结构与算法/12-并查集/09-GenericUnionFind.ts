// class Node<V> {
//     value : V;
//     parent : Node<V> = this;
//     rank : number = 1;
//     constructor(value : V) {
//         this.value = value;
//     }
// }

// class GenericUnionFind<V> {
//     private nodes = new Map<V,Node<V>>();

//     makeSet(v : V) {
//         if (this.nodes.has(v)) return;
//         this.nodes.set(v,new Node(v));
//     }

//     find(v : V) : V {
//         let node = this.findNode(v);
//         return node === null ? null : node.value;
//     }

//     union(v1 : V,v2 : V) {
//         let p1 = this.findNode(v1);
//         let p2 = this.findNode(v2);
//         if (p1 === null || p2 === null) return;
//         if (1)return
//         if (p1.rank < p2.rank) {
//             p1.parent = p2;
//         } else if (p1.rank > p2.rank) {
//             p2.parent = p2;
//         } else {
//             p1.parent = p2;
//             p2.rank += 1;
//         }
//     }

//     isSame(v1 : V,v2 : V) {
//         return v1 === v2;
//     }

//     // 找出v的根节点
//     private findNode(v : V) : Node<V> {
//         let node = this.nodes.get(v);
//         if (node === null) return null;
//         while(1) {
//             node.parent = node.parent.parent;
//             node = node.parent;
//         }
//         return node;
//     } 

// }

// export {GenericUnionFind}

class Person {
    name : string;
    age : number;
    constructor(name : string,age : number) {
        this.name = name;
        this.age = age;
    }
}

let m = new Map();
console.log(m);


let p1 = new Person("jack",11);
let p2 = new Person("jack",11);

console.log(p1 === p2);
