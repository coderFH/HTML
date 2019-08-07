let fs = require('fs');

// 1. 创建读入和写入流
let rs = fs.createReadStream('/Users/wangfh/HTML/stage-08-Node/images/lk.mp4');
let ws = fs.createWriteStream('/Users/wangfh/HTML/stage-08-Node/file/流.mp4');

// 2. 写入
rs.on('data', (err,data)=>{
    if (!err) {
        ws.write(data);
    } else {
        throw err;
    }

});

// 3. 关闭通道
ws.end();

// 4. 监听流的打开和关闭
ws.once('open', ()=>{
    console.log('写入流通道已经打开');
});

ws.once('close', ()=>{
    console.log('写入流通道已经关闭');
});

rs.once('open', ()=>{
    console.log('读入流通道已经打开');
});

rs.once('close', ()=>{
    console.log('读入流通道已经关闭');
});

