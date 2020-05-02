import {Comparator} from './Comparator'
import {Node} from './02-二叉树(基类)'
import {BinarySearchTree} from './03-二叉搜索树(继承二叉树)'

class BalanceBinarySearchTree<E> extends BinarySearchTree<E> {

    // TAG: ----- 构造函数 -----
    constructor(comparator : Comparator<E>) {
        super(comparator);
    }

    // Tag: 旋转操作
    // 左旋
    protected rotateLeft(grand : Node<E>) : void {
        let parent = grand.right;
        let child = parent.left;
        grand.right = child;
        parent.left = grand;
        this.afterRotate(grand,parent,child);
    }

    // 右旋
    protected rotateRight(grand : Node<E>) : void {
        let parent = grand.left;
        let child = parent.right;
        grand.left = child;
        parent.right = grand;
        this.afterRotate(grand,parent,child);
    }

    // 旋转之后的操作
    protected afterRotate(grand : Node<E>,parent : Node<E>, child : Node<E>) {
        //让parent成为子树的根节点
        parent.parent = grand.parent;
        if (grand.isLeftChild()) {
            grand.parent.left = parent;
        } else if(grand.isRightChild()) {
            grand.parent.right = parent;
        } else { //grand 是 root 节点
            this.root = parent;
        }

        // 更新child的parent
        if (child !== null) {
            child.parent = grand;
        }

        //更新grand的parent;
        grand.parent = parent;
    }

    // Tag: 旋转操作(统一处理的方式)
    protected rotate(r : Node<E>, //子树的根节点
                   b : Node<E>, c : Node<E>,
                   d : Node<E>,
                   e : Node<E>, f : Node<E> ) : void {
        // 让d成为这颗子树的根节点
        d.parent = r.parent;
        if (r.isLeftChild()) {
            r.parent.left = d;
        } else if(r.isRightChild()) {
            r.parent.right = d;
        } else {
            this.root = d
        }

        //b-c
        b.right = c;
        if (c !== null) {
            c.parent = b;
        }
        
        //e-f
        f.left = e;
        if (e != null) {
            e.parent = f;
        }
        
        //b-d-f
        d.left = b;
        d.right = f;
        b.parent = d;
        f.parent = d;
        
    }
}

export {BalanceBinarySearchTree}