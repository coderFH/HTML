/*
 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 示例 1:
     输入: 1->1->2
     输出: 1->2
 
 示例 2:
     输入: 1->1->2->3->3
     输出: 1->2->3

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// if (head === null || head.next === null) return head

    // let curNode = head //用于一级一级找的
    // let posNode = head; //定位用的
    // let cmpVal = posNode.val 

// while(curNode.next != null) {
//     curNode = curNode.next
//     if (cmpVal != curNode.val) {
//         posNode.next = curNode;
//         posNode = curNode;
//         cmpVal = curNode.val
//     } else {
//         posNode.next = null;
//     }
// }
// return head;

var deleteDuplicates = function(head) {
    let currentNode = head
    while (currentNode != null && currentNode.next !== null) {
        if (currentNode.next.val === currentNode.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        } 
    } 
    return head;
};

