/*
翻转一棵二叉树。

示例：
    输入：

        4
    /   \
    2     7
    / \   / \
    1   3 6   9
输出：
      4
    /   \
    7     2
    / \   / \
    9   6 3   1
备注:
    这个问题是受到 Max Howell 的 原问题 启发的 ：
    谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/invert-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//前序
var invertTree = function(root) {
    if (root === null) return root;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

var invertTree1 = function(root) {
    if (root === null) return root;

    invertTree(root.left);

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    invertTree(root.left); //中序遍历要注意哦,因为前边实施了交换,所以这里应该遍历左树

    return root;
};

//后序遍历
var invertTree2 = function(root) {
    if (root === null) return root;

    invertTree(root.left);
    invertTree(root.right);

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    return root;
};

//层序遍历
var invertTree3 = function(root) {
    if (root === null) return root;

    let queue = new Array();
    queue.push(root); 

    while (queue.length > 0) {
        let node = queue.shift(); //出队
        
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right)
        }            
    }
    return root;
};