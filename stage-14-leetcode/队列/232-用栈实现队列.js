/*
使用栈实现队列的下列操作：

    push(x) -- 将一个元素放入队列的尾部。
    pop() -- 从队列首部移除元素。
    peek() -- 返回队列首部的元素。
    empty() -- 返回队列是否为空。

示例:
    MyQueue queue = new MyQueue();
    queue.push(1);
    queue.push(2);  
    queue.peek();  // 返回 1
    queue.pop();   // 返回 1
    queue.empty(); // 返回 false

说明:
    你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
    你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
    假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var MyQueue = function() {
    this.inStack = []
    this.outStack = []
};

MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        while(this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop())
        }
        return this.outStack.pop()
    } else {
        return this.outStack.pop()
    }
};

MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        while(this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop())
        }
        return this.outStack[this.outStack.length - 1]
    } else {
        return this.outStack[this.outStack.length - 1]
    }
};

MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0
};

var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj);


var param_2 = obj.pop()
var param_5 = obj.pop()
console.log(param_2);
console.log(param_5);
console.log(obj);

var param_3 = obj.peek()
console.log(param_3);

var param_4 = obj.empty()
console.log(param_4);
