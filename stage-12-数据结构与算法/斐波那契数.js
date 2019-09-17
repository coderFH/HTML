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
    if (n <= 1) return 1;
    let first = 0;
    let second = 1;
    /*分析上边的 值, 当n传2 的时候 需要加1次  0+1=1
                   当n传3 的时候 需要加2次  0+1=1 1+1=2
                   当n传4 的时候 需要加3次  1+0=1 1+1=2 2+1=3
                   当n传5 的时候 需要加4次  0+1=1 1+1=2 1+2=3 2+3=5
                   由此可推出,传的n 就 加 n-1次
    */
    for (let i = 0;i < n -1; i++) {
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

console.log(fib2(90));
