/*
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//官方的题解1.自顶向下的递归
var isBalanced = function(root) {
    function height(root) {
        if (root === null) return -1;
        return 1 + Math.max(height(root.left),height(root.right));
    }
    
    if (root === null) return true;

    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
}

//官方的题解2.自地向上的递归
class TreeInfo {
    constructor(height,balanced) {
        this.height = height;
        this.balanced = balanced;
    }
}

var isBalanced = function(root) {
    function isBalancedTreeHelper(root) {
        if (root === null) return new TreeInfo(-1,true);

        let left = isBalancedTreeHelper(root.left);
        if (!left.balanced) {
            return new TreeInfo(-1,false);
        }   

        let right = isBalancedTreeHelper(root.right);
        if (!right.balanced) {
            return new TreeInfo(-1,false);
        }  

        if (Math.abs(left.height - right.height) < 2) {
            return new TreeInfo(Math.max(left.height,right.height) + 1,true);
        }
        return new TreeInfo(-1,false);
    }
    return isBalancedTreeHelper(root).balanced;
}

// 自己的解法------两次遍历,一次是求node的高度,一次是遍历每个节点,性能不是很好
var isBalanced = function(root) {
    if (root === null) return true;

    let queue = [root];
    let leftH = 0;
    let rightH = 0;

    while (queue.length > 0) {
        let node = queue.shift();

        leftH = 0;
        rightH = 0;
        if (node.left) {
            leftH = NodeHeight(node.left);
        }
        if (node.right) {
            rightH = NodeHeight(node.right);
        }

        console.log(leftH,rightH)
        if (Math.abs(leftH - rightH) > 1) {
            return false;
        }

        if (node.left !== null) {
            queue.push(node.left)
        }

        if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return true;
};


// 返回一个节点的高度
function NodeHeight(node) {
    let queue = [node];
    levelSize = 1;
    let heigth = 0;

    while (queue.length > 0) {
        let node = queue.shift();
        levelSize--;

        if (node.left !== null) {
            queue.push(node.left)
        }

        if (node.right !== null) {
            queue.push(node.right)
        }

        if (levelSize === 0) {
            levelSize = queue.length;
            heigth++;
        }
    }
    return heigth;
}


