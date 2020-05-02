import {Node} from './02-二叉树(基类)'
import {BalanceBinarySearchTree} from './04-平衡二叉搜索树(继承二叉搜索树)'
import {Comparator} from './Comparator'

class AVLNode<E> extends Node<E> {

    height : number = 1; //叶子节点,一创建出来高度绝对是1

    constructor(element : E,parent : Node<E>) {
        super(element,parent);
    }

    // 得到该节点的平衡因子
    balanceFactor() : number {
        let leftHeight = this.left === null ? 0 : (<AVLNode<E>>this.left).height;
        let rightHeight = this.right === null ? 0 : (<AVLNode<E>>this.right).height;
        return leftHeight - rightHeight;
    }

    // 更新当前节点的高度
    updateHeight() : void {
        let leftHeight = this.left === null ? 0 : (<AVLNode<E>>this.left).height;
        let rightHeight = this.right === null ? 0 : (<AVLNode<E>>this.right).height;
        this.height = 1 + Math.max(leftHeight,rightHeight); //当前节点的高度等于左右子树最好的一边加1
    }

    // 左右子树哪边更高
    tallerChild() : Node<E> {
        let leftHeight = this.left === null ? 0 : (<AVLNode<E>>this.left).height;
        let rightHeight = this.right === null ? 0 : (<AVLNode<E>>this.right).height;
        if (leftHeight > rightHeight) return this.left;
        if (leftHeight < rightHeight) return this.right;
        return this.isLeftChild() ? this.left : this.right;
    }
}

class AVLTree<E> extends BalanceBinarySearchTree<E> {

    constructor(comparator : Comparator<E>) {
        super(comparator);
    }

    // Tag: 添加节点之后的操作
    afterAdd(node : Node<E>) : void {        
        while ((node = node.parent) !== null) {
            if (this.isBalanced(node)) { //如果是平衡的                
                //更新高度
                this.updateHeight(node);
            } else {
                //恢复平衡
                this.rebalance(node); //能到这里,就说明找到了不平衡的那个grandpar,直接break

                // 使用统一的方式去恢复平衡
                // this.rebalanceUnify(node);
                break;
            }
        }
    }

    // Tag: 移除节点之后的操作
    afterRemove(node : Node<E>) : void {        
        while ((node = node.parent) !== null) {
            if (this.isBalanced(node)) { //如果是平衡的                
                //更新高度
                this.updateHeight(node);
            } else {
                //恢复平衡
                // this.rebalance(node);
                // 使用统一的方式去恢复平衡
                this.rebalanceUnify(node);
            }
        }
    }

    // Tag:创建当前树的节点
    createNode(element : E, parent : Node<E>) : AVLNode<E>{
        return new AVLNode(element,parent);
    }

    // Tag: 恢复平衡的第一种方式
    // 恢复平衡
    // 当前的node 其实就是 高度最低的那个不平衡的节点 ,找 g,p n 的过程
    rebalance(grand : Node<E>) : void {
        let parent = (<AVLNode<E>>grand).tallerChild();
        let node = (<AVLNode<E>>parent).tallerChild();
        if (parent.isLeftChild()) { // L
            if (node.isLeftChild()) { //LL
                this.rotateRight(grand); //右旋
            } else { //LR
                this.rotateLeft(parent);
                this.rotateRight(grand);
            }
        } else {
            if (node.isLeftChild()) { //RL
                this.rotateRight(parent);
                this.rotateLeft(grand);
            } else { //RR  
                this.rotateLeft(grand); //左旋
            }
        }
    }

    // Tag: 恢复平衡的第二种方式(统一处理) 
    rebalanceUnify(grand : Node<E>) : void {
        let parent = (<AVLNode<E>>grand).tallerChild();
        let node = (<AVLNode<E>>parent).tallerChild();
        if (parent.isLeftChild()) { // L
            if (node.isLeftChild()) { //LL
                this.rotate(grand,node,node.right,parent,parent.right,grand);
            } else { //LR
                this.rotate(grand,parent,node.left,node,node.right,grand);
            }
        } else {
            if (node.isLeftChild()) { //RL
                this.rotate(grand,grand,node.left,node,node.right,parent);
            } else { //RR  
                this.rotate(grand,grand,parent.left,parent,node.left,node);
            }
        }
    }

    afterRotate(grand : Node<E>,parent : Node<E>, child : Node<E>) {
        super.afterRotate(grand,parent,child);
         //更新高度
         this.updateHeight(grand);
         this.updateHeight(parent);
    }

    rotate(r : Node<E>, //子树的根节点
        b : Node<E>, c : Node<E>,
        d : Node<E>,
        e : Node<E>, f : Node<E> ) : void {
        super.rotate(r,b,c,d,e,f);
        this.updateHeight(b);
        this.updateHeight(f);
        this.updateHeight(d);
    }

    // 判断是否平衡
    private isBalanced(node : Node<E>) : boolean {
        return Math.abs((<AVLNode<E>>node).balanceFactor()) <= 1;
    }

    // 更新节点的高度
    private updateHeight(node : Node<E>) : void {
        (<AVLNode<E>>node).updateHeight();
    }
}

export {AVLTree}