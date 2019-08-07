let fs = require('fs');

let rs = fs.createReadStream('/Users/wangfh/HTML/stage-08-Node/images/01.jpeg');
let ws = fs.createWriteStream('/Users/wangfh/HTML/stage-08-Node/file/管道.jpeg');

// 建立管道
rs.pipe(ws);