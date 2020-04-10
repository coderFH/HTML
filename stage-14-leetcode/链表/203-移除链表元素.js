/*
 删除链表中等于给定值 val 的所有节点。

 示例:
     输入: 1->2->6->3->4->5->6, val = 6
     输出: 1->2->3->4->5
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/remove-linked-list-elements/
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var removeElements = function(head, val) {
    let preNode = new ListNode(0);
    preNode.next = head

    let prev = preNode;
    let cur = head;

    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur
        }
        cur = cur.next;
    }
    return preNode.next;
};

