//es5的写法
let fn = require('./02-node-导出文件');
let func = require('./02-node-导出文件02');

console.log(fn.str);
fn.test();

console.log(func.sum(1, 2, 3, 4, 5));
console.log(func.avg(1, 2, 3, 4, 5));

// 核心模块的导入
let fs = require('fs');
let http = require('http');