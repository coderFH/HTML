import {Comparator} from './Comparator'
import {BinaryTree,Node,Visitor} from './02-二叉树(基类)'

class BinarySearchTree<E> extends BinaryTree<E> {

    private comparator : Comparator<E>

    // TAG: ----- 构造函数 -----
    constructor(comparator : Comparator<E>) {
        super();
        this.comparator = comparator;
    }

    // TAG: ----- 增 -----
    add(element : E) {
        this.elementNotNullCheck(element);
        
        if (this.root === null) { //添加的第一个节点
            this.root = this.createNode(element,null);
            this.count++;

            //新添加节点后的处理
            this.afterAdd(this.root);

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
        let newNode = this.createNode(element,parent);
        if (cmp > 0) {
            parent.right = newNode;
        } else {
            parent.left = newNode;
        }
        this.count++;

        //新添加节点后的处理
        this.afterAdd(newNode);
    }

    //创建节点方法,默认返回Node,如果子类(AVL,红黑树)想返回自己的Node,重写这个方法
    protected createNode(element : E, parent : Node<E>) : Node<E> {
        return new Node(element,parent);
    }

    // Tag:添加新节点后的调整,由子类AVL树或红黑树实现
    protected afterAdd(node : Node<E>) {}

    // Tag:删除node之后的调整
    protected afterRemove(node : Node<E>) {}

    // TAG: ----- 删 -----
    remove(element : E) {
        this.removeNode(this.node(element));
    }
    //删除某个节点
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
            /*
            因为红黑树的特性,本来这里传递的是node,也就是要删除的节点,但这里之所以传replacement(替代提的节点),
            是因为红黑树在调整平衡时,有一种情况是需要知道替代他的节点是红色还是黑色,所以这里直接把replacement传递出去
            而传replacement对AVL树是没有影响的,因为AVL树不管是拿到node还是replacement,都是沿着父节点往上去找,而replacement的父节点已经和node
            的父节点是一个的了,所以你传谁都一样
            */
            this.afterRemove(replacement); 
        } else if(node.parent == null) { //node是叶子节点并且是根节点
            this.root = null;
            this.afterRemove(node);
        } else { //node是叶子节点  即上边的三目运算符 left为空 然后把 node.right赋值给了node ,但node.right也是null
            if (node == node.parent.left) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
            this.afterRemove(node);
        }
    }
 
    // TAG: ----- 包含 -----
    contains(element : E) : boolean {
        return this.node(element) !== null;
    }

    // TAG: ----- 打印树的结构 -----
    toString() : string {
        if (this.root === null) return "空了";
        let queue = [this.root];
        let treeStr = "";
        let levelSize = 1;
        while(queue.length > 0) {
            let node = queue.shift();
            let parent = node.parent === null ? "null" : node.parent.element.toString();
            treeStr = treeStr + "   " + node.element + "{" + parent + "}";
            levelSize--;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            if (levelSize == 0) {
                levelSize = queue.length;
                treeStr = treeStr + "\n";
            }
        }
        return treeStr;
    }

    // 最开始打印树的方法,感觉用着不爽,注释了,留作参考吧
    // toString() : string {
    //     this.toStrings(this.root,this.sb,"");
    //     return this.sb;
    // }
    // private toStrings(node : Node<E>,sb : string,prefix : string) : void {
    //     if (node === null) return;
    //     this.sb = this.sb + prefix + node.element + '\n'; 
    //     this.toStrings(node.left,this.sb, prefix + "L---");
    //     this.toStrings(node.right,this.sb, prefix + "R---");
    // }
    
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

export {BinarySearchTree}