// TAG: ----- 访问器 -----
//当遍历树的时候,每遍历到一个元素,该如何处理该元素由这个接口往外抛出
interface Visitor<E> {
    stop : boolean;
    visit(element : E) : boolean;
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

    //Note: 判断是不是叶子
    isLeaf() : boolean {
        return this.left === null && this.right === null;
    }

    //Note: 是否拥有两个子节点
    hasTwoChildren() : boolean {
        return this.left !== null && this.right !== null;
    }

    //Note: 判断我是父节点的左子树
    isLeftChild() : boolean {
        return this.parent != null && this == this.parent.left;
    }

    //Tag: --- 红黑树需要的特性
    //Note: 判断我是父节点的右子树
    isRightChild() : boolean {
        return this.parent != null && this == this.parent.right;
    }

    //Note: 获取兄弟节点
    sibling() : Node<E> {
        if (this.isLeftChild()) {
           return this.parent.right; 
        }
        if (this.isRightChild()) {
            return this.parent.left;
        }
        return null;
    }
}

class BinaryTree<E> {
    protected count = 0;
    protected root : Node<E> = null;

    // TAG: ----- 节点的个数 -----
    size() : number {
        return this.count;
    }

    // TAG: ----- 树是否为空 -----
    isEmpty() : boolean {
        return this.count === 0
    }

    // TAG: ----- 清空 -----
    clear() : void {
        this.root = null;
        this.count = 0;
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
        if (this.root === null) return;

        let queue = new Array<Node<E>>();
        queue.push(this.root); //头部入队

        while (queue.length > 0) { 
            let node : Node<E> = queue.shift(); //出队

            if(visitor.visit(node.element)) return; // 如果外界的访问者遍历到符合的条件,会返回true,然后这里就停止遍历就可以了

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
        if (visitor === null) return;
        this.preOrders(this.root,visitor);
    }
    private preOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null || visitor.stop) return;
        visitor.stop = visitor.visit(node.element);
        this.preOrders(node.left,visitor);
        this.preOrders(node.right,visitor);
    }

    //中序遍历
    inOrder(visitor : Visitor<E>) : void {
        if (visitor === null || visitor.stop) return;
        this.inOrders(this.root,visitor);
    }
    private inOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null || visitor.stop) return;
        this.inOrders(node.left,visitor);
        if (visitor.stop) return
        visitor.stop = visitor.visit(node.element);
        this.inOrders(node.right,visitor);
    }

    //后序遍历
    postOrder(visitor : Visitor<E>) : void {
        if (visitor === null) return;
        this.postOrders(this.root,visitor);
    }
    private postOrders(node : Node<E> ,visitor : Visitor<E>) : void {
        if (node === null) return;
        this.postOrders(node.left,visitor);
        this.postOrders(node.right,visitor);
        if (visitor.stop) return
        visitor.stop = visitor.visit(node.element);
    }

    // TAG: ----- 非递归实现,由外部实现得到节点后要执行的操作 -----
    //前序遍历
    preOrderIteration1(visitor : Visitor<E>) : void {
        if (visitor === null || this.root === null) return;
        let stack = [this.root];
        while (stack.length > 0) {
            let node = stack.pop();
            if(visitor.visit(node.element)) return;
            if (node.right !== null) {
                stack.push(node.right);
            }
            if (node.left !== null) {
                stack.push(node.left);
            }
        }
    }

    preOrderIteration2(visitor : Visitor<E>) : void {
        if (visitor === null || this.root === null) return;
        let node = this.root;
        let stack = [];
        while (true) {
            if (node !== null) {
                if (visitor.visit(node.element)) return;
                if (node.right !== null) {
                    stack.push(node.right);
                }
                node = node.left;
            } else if (stack.length === 0) {
                return;
            } else {
                node = stack.pop()
            }
        }
    }
   
    //中序遍历
    inOrderIteration(visitor : Visitor<E>) : void {
        if (visitor === null || this.root === null) return;
        let node = this.root;
        let stack = [];
        while(true) {
            if (node !== null) {
                stack.push(node);
                node = node.left
            } else if (stack.length === 0) {
                return;
            } else {
                node = stack.pop();
                if (visitor.visit(node.element)) return;
                node = node.right;
            }
        }
    }
    
    //后序遍历
    postOrderIteration(visitor : Visitor<E>) : void {
        if (visitor === null || this.root === null) return;
        let prev = null;
        let stack = [this.root];
        while(stack.length > 0) {
            let top = stack[stack.length - 1];
            if (top.isLeaf() || (prev != null && prev.parent === top)) {
                prev = stack.pop();
                if (visitor.visit(prev.element)) return;
            } else {
                if (top.right !== null) {
                    stack.push(top.right);
                }
                if (top.left !== null) {
                    stack.push(top.left);
                }
            }
        }
    }
    
    // TAG: ----- 树的高度 -----
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

            /*
            if (node.hasTwoChildren()) {
                queue.push(node.left);
                queue.push(node.right)
            } else if (node.left === null && node.right !== null) {
                return false;
            } else { //后面遍历的节点都必须是叶子节点,才会是完全二叉树
                leaf = true;
                if (node.left !== null) { //不加这句,当左不为空,右为空的那种情况是不能入队的
                    queue.push(node.left);
                }
            }*/
            //上边的这种遍历很容易遗忘最后else里的那个if情况,所以使用下边这种方式
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
    protected predecessor(node : Node<E>) {
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
    protected successor(node : Node<E>) {
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
}

export {BinaryTree,Node,Visitor}