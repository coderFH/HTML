/*
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1
 

示例 2:

输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7
 

注意: 您可以假设树（即给定的根节点）不为 NULL。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-bottom-left-tree-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findBottomLeftValue = function(root) {
    let queue = [root];
    let answer = root.val;
    while (queue.length > 0) {
        let node = queue.shift();
        answer = node.val;
        if(node.right !== null) {
            queue.push(node.right);
        }
        if(node.left !== null) {
            queue.push(node.left);
        }   
    }
    return answer;
};

var findBottomLeftValue = function(root) {
    if(root === null) return null;

    if (root.left === null && root.right === null) {
        return root.val
    }

    let queue = [root];

    let answer = root.val;
    let levelSize = 1;
    let newLine = false;

    
    while (queue.length > 0) {
        let node = queue.shift();
        levelSize--;

        if (newLine) {
            answer = node.val;
            newLine = false;
        }

        if(node.left !== null) {
            queue.push(node.left);
        }

        if(node.right !== null) {
            queue.push(node.right);
        }

        if (levelSize === 0) {
            levelSize = queue.length;
            newLine = true;
        }
    }
    return answer;
};