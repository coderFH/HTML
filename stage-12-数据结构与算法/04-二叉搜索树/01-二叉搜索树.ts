import {Person} from './Person'
import {Comparator} from './Comparator'

class Node<E> {
    element : E;
    right : Node<E> = null;
    left : Node<E> = null;
    parent : Node<E>;
    constructor(element : E,parent : Node<E>) {
        this.element = element;
        this.parent = parent;
    }
}

class BinarySearchTree<E> {
    private count = 0;
    private root : Node<E> = null;
    private comparator : Comparator<E>

    constructor(comparator : Comparator<E>) {
        this.comparator = comparator;
    }

    // MARK: ----- 大小 -----
    size() : number {
        return this.count;
    }

    // MARK: ----- 是否为空 -----
    isEmpty() : boolean {
        return this.count === 0
    }

    // MARK: ----- 增 -----
    add(element : E) {
        this.elementNotNullCheck(element);
        
        if (this.root === null) { //添加的第一个节点
            this.root = new Node(element,null);
            this.count++;
            return;
        } 

        //添加的不是第一个节点
        //找到父节点
        let node : Node<E> = this.root;
        let parent : Node<E> = this.root;
        let cmp = 0
        while (node !== null) {
            cmp = this.compare(element,node.element);
            parent = node; //找到父节点
            if (cmp > 0) {
                node = node.right;
            } else if (cmp < 0) {
                node = node.left
            } else { //相等 如果相等,新值覆盖旧值,因为对于对象类型而言有可能年级是一样的,但是名字是不一样的,所以做好的方式是新值覆盖旧值
                node.element = element 
                return
            }
        }
        //看看新节点插入到父节点的哪个位置
        let newNode = new Node(element,parent)
        if (cmp > 0) {
            parent.right = newNode;
        } else {
            parent.left = newNode;
        }
        this.count++;
    }

    // MARK: ----- 删 -----
    remove(element : E) {

    }

    // MARK: ----- 清空 -----
    clear() : void {

    }

    // MARK: ----- 包含 -----
    contains(element : E) : boolean {
        return true;
    }

    // MARK: ----- 遍历 -----
    //前序遍历
    preorderTraversal() : void {
        this.preorderTraversals(this.root);
    }

    private preorderTraversals(node : Node<E>) {
        if (node === null) return;
        console.log(node.element);
        this.preorderTraversals(node.left);
        this.preorderTraversals(node.right);
    }

    //中序遍历
    inorderTraversal() : void {
        this.inorderTraversals(this.root);
    }

    private inorderTraversals(node : Node<E>) {
        if (node === null) return;
        this.inorderTraversals(node.left);
        console.log(node.element);
        this.inorderTraversals(node.right);
    }

    //后序遍历
    postorderTraversal() : void {
        this.postTraversals(this.root);
    }

    private postTraversals(node : Node<E>) {
        if (node === null) return;
        this.postTraversals(node.left);
        this.postTraversals(node.right);
        console.log(node.element);
    }

    //层序遍历
    levelorderTraversal() {
        if (this.root === null) return

        let queue = new Array<Node<E>>();
        queue.push(this.root); //头部入队

        while (queue.length > 0) {
            let node : Node<E> = queue.shift(); //出队
            console.log(node.element);
            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right)
            }            
        }
    }


    // MARK: ----- 节点比较的规则 -----
    private compare(e1 : E,e2 : E) : number {
        //返回值等于0，代表e1和e2相等；返回值大于0，代表e1大于e2；返回值小于于0，代表e1小于e2
        return this.comparator.compare(e1,e2);
    }

    // MARK: ----- 检查元 素是否为空 -----
    private elementNotNullCheck(element : E) {
        if (element === null) {
            throw Error("element must not be null");
        }
    }
}

function test1() : void {
    //创建比较器,让person按照年龄大的就算大排序
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }

    let arr = [7,4,2,1,3,5,9,8,11,10,12]
    let bst = new BinarySearchTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        bst.add(arr[i])
    }
    bst.preorderTraversal();
    console.log('------');
    bst.inorderTraversal();
    console.log('------');
    bst.postorderTraversal();
    console.log('------');
    bst.levelorderTraversal();
}

function test2() : void {
    //创建比较器,让person按照年龄大的就算大排序
    class PersonComparator implements Comparator<Person> {
        compare(e1: Person, e2: Person): number {
            return e1.age - e2.age;
        }
    }

    let bst1 = new BinarySearchTree<Person>(new PersonComparator());
    bst1.add(new Person(20));
    bst1.add(new Person(21));
}


function test3() : void {
    //创建比较器,让person按照年龄大的就算小排序
    class PersonComparator1 implements Comparator<Person> {
        compare(e1: Person, e2: Person): number {
            return e2.age - e1.age;
        }
    }

    let bst2 = new BinarySearchTree<Person>(new PersonComparator1());
    bst2.add(new Person(20));
    bst2.add(new Person(21));
    bst2.preorderTraversal();
}

test1();

export {BinarySearchTree}