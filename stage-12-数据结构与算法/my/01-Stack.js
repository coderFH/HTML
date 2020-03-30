class Stack {
    constructor() {
        this.items = [];
    }
    //1.将元素压入到栈
    //2.从栈中取出元素
    //3.查看一下栈顶元素
    //4.判断栈是否为空
    //5.获取栈中元素的个数
    //6.toString方法
}

//1.将元素压入到栈
Stack.prototype.push = function(element) {
    this.items.push(element);
};

//2.从栈中取出元素
Stack.prototype.pop = function() {
    console.log(this);
    return this.items.pop();
};

//3.查看一下栈顶元素
Stack.prototype.peek = function() {
    console.log(this);
    return this.items[this.items.length -1];
};

//4.判断栈是否为空
Stack.prototype.isEmpty = function() {
    return this.items.length === 0
};

//5.获取栈中元素的个数
Stack.prototype.size = function () {
    return this.items.length;
};

//6.toString方法
Stack.prototype.toString = function() {
    let resultString = '';
    for (let i = 0; i < this.items.length; i++) {
        resultString += this.items[i] + '';
    }
    return resultString;
};

const s = new Stack();
s.push(20);
s.push(10);
s.push(100);
s.push(70);
s.push(20);
s.toString();
s.pop();
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
s.pop();
s.pop();
s.pop();
s.pop();
s.toString();
console.log(s.peek());
console.log(s.isEmpty());
console.log(s.size());
s.pop();

//利用栈结构,封装一个10进制转二进制的函数
function decToBin(decNumber) {
    //定义一个栈对象
    let stack = new Stack();

    //2.循环操作
    while (decNumber > 0) {
        //2.1 获取余数,并放到栈中
        stack.push(decNumber % 2);

        //2.2 获取整除后的结果,作为下一次的运算数字
        decNumber = Math.floor(decNumber / 2);
    }

    //3.从栈中取出0和1
    let bin = '';
    while (!stack.isEmpty()) {
        bin += stack.pop();
    }
    return bin;
}

//测试十进制转二进制函数
console.log(decToBin(500));
