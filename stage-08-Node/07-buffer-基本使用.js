/*
   00 - ff
   00000000 - 11111111

   8 bit = 1B
   1024B = 1KB
   1024KB = 1MB
   1024MB = 1GB
   1024GB = 1TB
*/

/*
 Buffer提供了
 Buffer.from
 Buffer.alloc
 Buffer.allocUnsafe
 Buffer.allocUnsafeSlow
 四个方法来申请内存
*/


//1. 基本使用
// let str = 'www.taobao.com';
let str = '让自己勇敢再勇敢';
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

//2.Buffer.alloc()
let bufferA = Buffer.alloc(20);
bufferA[0] = 10;
bufferA[1] = 11;
bufferA[2] = 0xFC;
bufferA[19] = 11;
bufferA[20] = 11; //越界了并不会存储
console.log(bufferA);

bufferA.forEach((item,index) => {
    console.log(index + '+' + item);
});
