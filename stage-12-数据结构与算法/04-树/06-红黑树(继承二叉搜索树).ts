import {Node} from './02-二叉树(基类)'
import {BalanceBinarySearchTree} from './04-平衡二叉搜索树(继承二叉搜索树)'
import {Comparator} from './Comparator'

class RBNode<E> extends Node<E> {
    color : boolean = false;
    constructor(element : E,parent : Node<E>) {
        super(element,parent);
    }
    toString() : string {
        let str = new String();
        if (!this.color) {
            str = "[R_]";
        }
        return str + this.element.toString();
    }
}

class RBTree<E> extends BalanceBinarySearchTree<E> {
    private static RED  : boolean = false;
    private static BLACK  : boolean = true;

    constructor(comparator : Comparator<E>) {
        super(comparator);
    }

    // Tag: 添加节点后的操作
    afterAdd(node : Node<E>) : void {        
        let parent = node.parent;

        //添加的是根节点,或者 上溢到达了根节点
        if (parent === null) {
            this.black(node);
            return;
        }
        //如果父节点是黑色,直接返回
        if (this.isBlack(parent)) return
        
        // 叔父节点
        let uncle = parent.sibling();
        // 祖父节点
        let grand = this.red(parent.parent);

        if (this.isRed(uncle)) { //叔父节点是红色[B树上溢]
            this.black(parent);
            this.black(uncle);
            //把祖父节点当做是新添加的节点
            this.afterAdd(grand);
            return;
        }

        //叔父节点不是红色
        if (parent.isLeftChild()) { //L
            if (node.isLeftChild()) { //LL
                this.black(parent);
            } else { //LR
                this.black(node);
                this.rotateLeft(parent);
            }
            this.rotateRight(grand);
        } else { //R
            if (node.isLeftChild()) { // RL
                 this.black(node);
                 this.rotateRight(parent);
            } else { //RR
                this.black(parent);
            }
            this.rotateLeft(grand);
        }
    }

    afterRemove(node : Node<E>) : void { 
        // //如果删除的节点是红色
        // if (this.isRed(node)) return;

        // //用于取代node的子节点是红色
        // if (this.isRed(node)) {
        //     this.black(node);
        //     return ;
        // }

        //如果删除的节点是红色
        //或者 用以取代删除节点的子节点是红色
        //这里的相当于上边的两个if的合并
        if (this.isRed(node)) {
            this.black(node); // 用以取代删除节点的子节点是红色,把取代他的节点染黑,
            return;
        } 

        let parent = node.parent;
        // 删除的是根节点
        if (parent === null) return;

        // 删除的是黑色叶子节点(下溢)
        // 判断被删除的node是左还是右
        let left = parent.left === null || node.isLeftChild();
        let sibling = left ? parent.right : parent.left;
        if (left) { // 被删除的节点在左边,兄弟节点在右边
            if (this.isRed(sibling)) { // 兄弟节点是红色
				this.black(sibling);
				this.red(parent);
				this.rotateLeft(parent);
				// 更换兄弟
				sibling = parent.right;
			}
			// 兄弟节点必然是黑色
			if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
				// 兄弟节点没有1个红色子节点，父节点要向下跟兄弟节点合并
				let parentBlack = this.isBlack(parent);
				this.black(parent);
				this.red(sibling);
				if (parentBlack) {
					this.afterRemove(parent);
				}
			} else { // 兄弟节点至少有1个红色子节点，向兄弟节点借元素
				// 兄弟节点的右边是黑色，兄弟要先旋转
				if (this.isBlack(sibling.right)) {
					this.rotateRight(sibling);
					sibling = parent.right;
				}
				this.color(sibling, this.colorOf(parent));
				this.black(sibling.right);
				this.black(parent);
				this.rotateLeft(parent);
			} 
        } else { // 被删除的节点在右边，兄弟节点在左边
            if (this.isRed(sibling)) { //兄弟节点是红色
                this.black(sibling);
                this.red(parent);
                this.rotateRight(parent);
                //更换兄弟
                sibling = parent.left;
            }
            // 兄弟节点必然是黑色
            if (this.isBlack(sibling.left) && this.isBlack(sibling.right)) {
                //兄弟节点没有1个红色子节点,父节点要向下跟兄弟节点合并
                let parentBlack = this.isBlack(parent);
                this.black(parent);
                this.red(sibling);
                if (parentBlack) {
                    this.afterRemove(parent);
                }
            } else { //兄弟节点至少有一个红色节点,向兄弟节点借元素
                //兄弟节点的左边是黑色(其实就是左边是null),兄弟要先旋转,统一成LL,最后统一右旋
                if (this.isBlack(sibling.left)) {
                    this.rotateLeft(sibling);
                    sibling = parent.left;
                }
                this.color(sibling,this.colorOf(parent));
                this.black(sibling.left);
                this.black(parent);
                this.rotateRight(parent);
            }
        }
    }

    // Tag: ----- 打印树的结构 -----
    toString() : string {
        if (this.root === null) return "空了";
        let queue = [this.root];
        let treeStr = "";
        let levelSize = 1;
        while(queue.length > 0) {
            let node = queue.shift();
            let parent = node.parent === null ? "null" : node.parent.element.toString();
            treeStr = treeStr + "   " + (<RBNode<E>>node).toString() + "{" + parent + "}";
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

    // Tag: 创建节点
    createNode(element : E, parent : Node<E>) : RBNode<E> {
        return new RBNode(element,parent);
    }

    //Note: 判断某个节点的颜色
    private colorOf(node : Node<E>) : boolean {
        return node === null ? RBTree.BLACK : (<RBNode<E>>node).color;
    }

    //Note: 是否为黑色
    private isBlack(node : Node<E>) : boolean {
        return this.colorOf(node) === RBTree.BLACK;
    }

    //Note: 是否为红色
    private isRed(node : Node<E>) : boolean {
        return this.colorOf(node) === RBTree.RED;
    }

    //Note: 染成红色节点
    private red(node : Node<E>) : Node<E> {
        return this.color(node, RBTree.RED);
    }

    //Note: 染成黑色节点
    private black(node : Node<E>) : Node<E> {
        return this.color(node,RBTree.BLACK);
    }

    //Note: 对节点进行染色
    private color(node : Node<E>,color : boolean) : Node<E> {
        if (node === null) return;
        (<RBNode<E>>node).color = color;
        return node;
    }
}

export {RBTree}