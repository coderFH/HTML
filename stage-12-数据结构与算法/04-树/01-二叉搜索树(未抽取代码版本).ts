import {Person} from './Person'
import {Comparator} from './Comparator'

// TAG: ----- 访问器 -----
//当遍历树的时候,每遍历到一个元素,该如何处理该元素由这个接口往外抛出
interface Visitor<E> {
    visit(element : E) : void;
}

// TAG: ----- 节点 -----
class Node<E> {
    element : E;
    right : Node<E> = null;
    left : Node<E> = null;
    parent : Node<E>;
    constructor(element : E,parent : Node<E>) {
        this.element = element;
        this.parent = parent;
    }

    // 判断是不是叶子
    isLeaf() : boolean {
        return this.left === null && this.right === null;
    }

    //是否拥有两个子节点
    hasTwoChildren() : boolean {
        return this.left !== null && this.right !== null;
    }
}

class BinarySearchTree<E> {
    private count = 0;
    private root : Node<E> = null;
    private comparator : Comparator<E>
    private sb : string = "";

    // TAG: ----- 构造函数 -----
    constructor(comparator : Comparator<E>) {
        this.comparator = comparator;
    }

    // TAG: ----- 节点的个数 -----
    size() : number {
        return this.count;
    }

    // TAG: ----- 树是否为空 -----
    isEmpty() : boolean {
        return this.count === 0
    }

    // TAG: ----- 增 -----
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

    // TAG: ----- 清空 -----
    clear() : void {
        this.root = null;
        this.count = 0;
    }

    // TAG: ----- 删 -----
    remove(element : E) {
        this.removeNode(this.node(element));
    }
    //删除某个节点

    /*
    如果一个节点的度为2,那么他的前驱或者后继节点的度只可能是1和0,如何理解这句话?
        例如我们找一个度为2的前驱节点
        那么一定是他左子树的最右边的那个节点,如果最右边的那个节点度为2,那只能说明他还不是最右,所以度为2的前驱,度只会是0或1
    */
    private removeNode(node : Node<E>) {
        if (node === null) return;
        this.count--;

        if (node.hasTwoChildren()) { //度为2的节点
            //找到后继节点
            let s = this.successor(node);
            // 用后继节点的值覆盖度为2的节点的值
            node.element = s.element;
            // 删除后继节点
            node = s; //如果一个节点的度为2,那么他的前驱或者后继节点的度只可能是1和0  所以后续就成了处理删除度为1和0的情况
        }

        //删除node节点(node的度必然是1或者0)
        let replacement = node.left != null ? node.left : node.right;

        if (replacement != null) {  //node 的度是 1 
            replacement.parent = node.parent; //更改parent
            if (node.parent == null) { // node是度为1的节点并且是根节点
                this.root = replacement;  
            } else if(node == node.parent.left) {
                node.parent.left = replacement;
            } else { // node == node.parent.right
                node.parent.right = replacement;
            }
        } else if(node.parent == null) { //node是叶子节点并且是根节点
            this.root = null;
        } else { //node是叶子节点  即上边的三目运算符 left为空 然后把 node.right赋值给了node ,但node.right也是null
            if (node == node.parent.left) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
        }
    }
 
    // TAG: ----- 包含 -----
    contains(element : E) : boolean {
        return this.node(element) !== null;
    }

    // 查找某个节点
    private node(element : E) : Node<E> {
        let node = this.root;
        while (node !== null) {
            let cmp = this.compare(element,node.element);
            if (cmp === 0) return node;
            if (cmp > 0) {
                node = node.right;
            } else { // cmp < 0
                node = node.left;
            }
        }
        return null;
    }

    // TAG: ----- 遍历 -----
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

    // TAG: ----- 每遍历到一个节点,把该节点抛出去,由外部实现得到节点后要执行的操作 -----
    //层序遍历,
    levelOrder(visitor : Visitor<E>) : void {
        if (this.root === null) return

        let queue = new Array<Node<E>>();
        queue.push(this.root); //头部入队

        while (queue.length > 0) {
            let node : Node<E> = queue.shift(); //出队

            visitor.visit(node.element);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right)
            }            
        }
    }

    //前序遍历
    preOrder(visitor : Visitor<E>) : void {
        this.preOrders(this.root,visitor);
    }
    private preOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null || visitor === null) return;
        visitor.visit(node.element);
        this.preOrders(node.left,visitor);
        this.preOrders(node.right,visitor);
    }

    //中序遍历
    inOrder(visitor : Visitor<E>) : void {
        this.inOrders(this.root,visitor);
    }
    private inOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null || visitor === null) return;
        this.inOrders(node.left,visitor);
        visitor.visit(node.element);
        this.inOrders(node.right,visitor);
    }

    //后序遍历
    postOrder(visitor : Visitor<E>) : void {
        this.postOrders(this.root,visitor);
    }
    private postOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null || visitor === null) return;
        this.postOrders(node.left,visitor);
        this.postOrders(node.right,visitor);
        visitor.visit(node.element);
    }

    // TAG: ----- 打印树的结构 -----
    toString() : string {
        this.toStrings(this.root,this.sb,"");
        return this.sb;
    }
    private toStrings(node : Node<E>,sb : string,prefix : string) : void {
        if (node === null) return;
        this.sb = this.sb + prefix + node.element + '\n'; 
        this.toStrings(node.left,this.sb, prefix + "L---");
        this.toStrings(node.right,this.sb, prefix + "R---");
    }

    // TAG: ----- 树的高度 -----
    //对于整个树而言,树的高度就是根节点的高度
    //递归实现:
    height() : number {
        return this.heigthWithNode(this.root);
    }
    //获取某个节点的高度
    private heigthWithNode(node : Node<E>) : number {
        if (node === null) return 0;
        return 1+ Math.max(this.heigthWithNode(node.right),this.heigthWithNode(node.left));
    }

    //迭代实现:(层序遍历的思想)
    heightIteration() : number {
        if (this.root === null) return 0;

        let height = 0;
        let levelSize = 1; //存储每一层元素的数量 1 表示第一层根节点的数量

        let queue = new Array<Node<E>>();
        queue.push(this.root); //头部入队

        while (queue.length > 0) {
            let node : Node<E> = queue.shift(); //出队

            levelSize--;

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right)
            }  

            if (levelSize === 0) { //意味着即将访问下一次
                levelSize = queue.length;
                height++;
            }
        }
        return height;
    }

    // TAG: ----- 判断是否是完全二叉树 -----
    //完全二叉树的特点: 叶子节点只会出现在最后两层,并且最后一层叶子靠左对齐
    /*
        其实就是个排列组合问题 :
        左 不为空  右 不为空  正常的入队
        左 null   右 不为空  false
        左 不为空  右 null   后边的节点 左右都应该是 null
        左 null   右 null   后边的节点 左右都应该是 null
    */
    isComplete() : boolean {
        if (null === this.root) return false;

        let queue = new Array<Node<E>>();
        queue.push(this.root); //头部入队

        let leaf = false;
        while (queue.length > 0) {
            let node : Node<E> = queue.shift(); //出队

            if (leaf && !node.isLeaf()) { // 也就是后边必须是叶子节点的情况下,遍历出了一个不是叶子节点的情况,直接返回false,说明不是完全二叉树
                return false
            }

            if (node.left !== null) {
                queue.push(node.left)
            } else if(node.right !== null) { //node.left == null && node.right != null
                return false;
            }
            if (node.right !== null) {
                queue.push(node.right);
            } else { // node.right == null
                leaf = true;
            }
        }
        return true;
    }

    // TAG: ----- 前驱节点 -----
    /*
    1.如果一个节点的 左子树 != null,就在左子树中一直往右找
    2.如果一个节点的 左子树 == null, parent != null 就顺着 parent 一直往上找 直到 是 父节点的右子树 为止
    3.如果一个节点的 左子树 == null, parent == null 没有前驱
    */
    private predecessor(node : Node<E>) {
        if (node === null) return null;

        // 前驱节点在左子树中,(left.right.right.right.....)
        let p = node.left
        if (p != null) {
            while (p.right !== null) {
                p = p.right;
            }
            return p;
        }

        //从父节点,祖父节点中寻找
        while (node.parent !== null && node === node.parent.left) {
            node = node.parent;
        }
        //能来的这里,就有两种情况
        // 1.node.parent === null
        // 2.node = node.parent.right;
        return node.parent;
    }
    // TAG: ----- 后继节点 -----
    private successor(node : Node<E>) {
        if (node === null) return null;

        // 后继节点在右子树中,(right.left.left.left.....)
        let s = node.right
        if (s != null) {
            while (s.left !== null) {
                s = s.left;
            }
            return s;
        }

        //从父节点,祖父节点中寻找
        while (node.parent !== null && node === node.parent.right) {
            node = node.parent;
        }
        //能来的这里,就有两种情况
        // 1.node.parent === null
        // 2.node = node.parent.left;
        return node.parent;
    }

    // TAG: ----- 节点比较的规则 -----
    private compare(e1 : E,e2 : E) : number {
        //返回值等于0，代表e1和e2相等；返回值大于0，代表e1大于e2；返回值小于于0，代表e1小于e2
        return this.comparator.compare(e1,e2);
    }

    // TAG: ----- 检查元 素是否为空 -----
    private elementNotNullCheck(element : E) {
        if (element === null) {
            throw Error("element must not be null");
        }
    }
}

//测试树的遍历
function test1() : void {
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

    
    //创建访问器,自定义访问的规则
    class VistorClass implements Visitor<number> {
        visit(element: number): void {
            console.log("_" + element + "_");
        } 
    }
   
    bst.preOrder(new VistorClass());
    console.log('------');
    bst.inOrder(new VistorClass());
    console.log('------');
    bst.postOrder(new VistorClass());
    console.log('------');
    bst.levelOrder(new VistorClass());
}

//测试比较器的使用
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

//测试比较器的使用
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

//测试树的高度
function test4() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }

    let bst = new BinarySearchTree<number>(new NumberCompator());
    for (let i = 0; i < 15; i++) {
        bst.add(Math.round(Math.random() * 100))
    }
    console.log( bst.toString());
    console.log(bst.height());
    console.log(bst.heightIteration());
}

//测试是否是完成二叉树
function test5() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }

    let arr = [7,4,9,2,5];
    let bst = new BinarySearchTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        bst.add(arr[i])
    }

    console.log( bst.toString());
    console.log(bst.isComplete());
}

// 测试删除
function test6() : void {
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
    bst.remove(9);
    bst.inorderTraversal();
    console.log("-----");
    console.log(bst.toString());
   
}

test6();

export {BinarySearchTree}