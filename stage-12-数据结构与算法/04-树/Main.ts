import {Comparator} from './Comparator'
import {BinarySearchTree} from './03-二叉搜索树(继承二叉树)'
import {Visitor} from './02-二叉树(基类)'
import {AVLTree} from './04-AVL树(继承二叉搜索树)'


//Tag:二叉搜索树相关的测试
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

//Tag:AVL树相关的测试
function test3() : void {
    class NumberCompator implements Comparator<number> {
        compare(e1: number, e2: number): number {
            return e1 - e2;
        }
    }
    let arr = [7,4,2,1,3,5,9,8,11,10,12];
    let bst = new AVLTree<number>(new NumberCompator());
    for (let i = 0; i < arr.length; i++) {
        bst.add(arr[i])
    }
    bst.remove(9);
    bst.inorderTraversal();
    console.log("-----");
    console.log(bst.toString());
}



test6();