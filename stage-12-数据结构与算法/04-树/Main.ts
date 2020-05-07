import {Comparator} from './Comparator'
import {Visitor} from './02-二叉树(基类)'
import {BinarySearchTree} from './03-二叉搜索树(继承二叉树)'
import {AVLTree} from './05-AVL树(继承二叉搜索树)'
import {RBTree} from './06-红黑树(继承二叉搜索树)'

// Tag:二叉搜索树相关的测试
// 测试树的遍历
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
    // bst.preorderTraversal();
    // console.log('------');
    // bst.inorderTraversal();
    // console.log('------');
    bst.postorderTraversal();
    console.log('------');
    // bst.levelorderTraversal();

    
    //创建访问器,自定义访问的规则
    class VistorClass implements Visitor<number> {
        stop: boolean;
        visit(element: number): boolean {
            console.log(element);
            // return element === 9 ? true : false; //遍历到9就停止
            return false;
        } 
    }
    // console.log(bst.toString());
    
    // bst.preOrder(new VistorClass());
    // console.log('------');
    // bst.inOrder(new VistorClass());
    // console.log('------');
    // bst.postOrder(new VistorClass());
    // console.log('------');
    // bst.levelOrder(new VistorClass());

    // bst.preOrderIteration1(new VistorClass());
    // bst.preOrderIteration2(new VistorClass());
    // console.log('------');
    // bst.inOrderIteration(new VistorClass());
    console.log('------');
    bst.postOrderIteration(new VistorClass());
}

// 测试删除
function test2() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }

    let arr = [7,4,2,1,3,5,9,8,11,10,12]
    let bst = new BinarySearchTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        console.log('[' + arr[i] + ']');
        bst.add(arr[i])
    }
    console.log(bst.toString());

    console.log('-----------------------');
    
    for (let i = 0; i < arr.length; i++) {
        console.log('[' + arr[i] + ']');
        bst.remove(arr[i]);
    }
    console.log(bst.toString());
}

// Tag:AVL树相关的测试
function test3() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }
    let arr = [55, 87, 56, 74, 96, 22, 62, 20, 70, 68, 90, 50];
    let av = new AVLTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        av.add(arr[i])
    }
    console.log(av.toString())

    for (let i = 0; i < arr.length; i++) {
        av.remove(arr[i]);
    }
    console.log(av.toString());
}

// Tag: 红黑树相关的测试
function test4() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }
    let arr = [55, 87, 56, 74, 96, 22, 62, 20, 70, 68, 90, 50];
    let bst = new RBTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        bst.add(arr[i])
    }
    console.log(bst.toString());

    console.log('-------------------');
    
    for (let i = 0; i < arr.length; i++) {
        bst.remove(arr[i]);
        console.log("【" + arr[i] + "】");
        console.log(bst.toString());
    }
}


test1();