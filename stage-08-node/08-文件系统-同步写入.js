//1.引入模块
let fs = require('fs');

//2. 打开文件
let fd = fs.openSync('/Users/wangfh/HTML/stage-08-Node/file/同步写入.txt','w');

//3.写入内容
fs.writeFileSync(fd,'今天的天气是阴沉的,在dy,2019年8月7号');

//4.保存并退出
fs.closeSync(fd);
