/*
 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

 F(0) = 0,  F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 给定 N，计算 F(N)。

 示例 1：
     输入：2
     输出：1
     解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 
 示例 2：
     输入：3
     输出：2
     解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 
 示例 3：
     输入：4
     输出：3
     解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
  

 提示：
    0 ≤ N ≤ 30

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/fibonacci-number
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

//0 1 1 2 3 5
function fib1(n) {
    if (n <= 1) return n;
    return fib1(n - 1) +  fib1(n-2);
}

/*
* n传的值 0 1 2  3  4  5   6    7
* 结果:   0 1 1  2  3  5   8    13
*
* */
function fib2(n) {
    if (n <= 1) return n;
    let first = 0;
    let second = 1;
    /*分析上边的 值, 当n传2 的时候 需要加1次  0+1=1
                   当n传3 的时候 需要加2次  0+1=1 1+1=2
                   当n传4 的时候 需要加3次  1+0=1 1+1=2 2+1=3
                   当n传5 的时候 需要加4次  0+1=1 1+1=2 1+2=3 2+3=5
                   由此可推出,传的n 就 加 n-1次
    */
    for (let i = 0;i < n-1; i++) {
        let sum = first + second;
        first = second;
        second = sum;
    }
    return second;
}

console.log(fib1(0));
console.log(fib1(5));
console.log(fib1(19));
console.log(fib1(30));
// console.log(fib(64)); //第一种算法,到64就执行不动了,耗费大量时间

console.log(fib2(64));
