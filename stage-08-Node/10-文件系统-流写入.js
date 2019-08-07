let fs = require('fs');

//1.创建写入流
let ws = fs.createWriteStream('/Users/wangfh/HTML/stage-08-Node/file/流写入.txt');

//2.写入内容
ws.write('我在马路边');
ws.write('捡到一毛钱');
ws.write('买了一把刀');
ws.write('杀了一头牛');

//3.关闭通道
ws.end();

//4.监听到打开通道
ws.once('open',()=>{
    console.log('通道已经打开!');
});

ws.once('close',()=>{
    console.log('通道已经关闭!');
});