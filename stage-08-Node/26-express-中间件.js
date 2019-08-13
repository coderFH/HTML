const express = require('./npm/node_modules/express');
const fs = require('fs');
const app = express();

// 1. 写日志 log
app.use((req, res, next)=>{
    console.log('测试');
    const log =
    `
    ----------------------------------------
    请求的方式:${req.method},\n
    请求的路径:${req.url},\n
    请求的时间:${new Date()}
    ----------------------------------------
    \n
    `;
    // 写入文件
    fs.appendFile('./stage-08-Node/file/log.txt', log, (err)=>{
        if(err){
            console.log(err);
            return console.log('记录日志失败');
        }
        next();
    })
});

// 中间件
app.use((req, res, next)=>{
    console.log('中间件1');
    next();
});

app.use((req, res, next)=>{
    console.log('中间件2');
    next();
});

app.use((req, res, next)=>{
    console.log('中间件3');
    next();
});

app.use('/cc',(req, res, next)=>{
    console.log('ccccccc');  //只有访问的路径是/cc的 才会触发这个中间件
    next();
});

app.get('/', (req, res, next)=>{
    console.log('/11111111');
    res.write('<h1>/ 111111111</h1>');
    next(); //如果不调用next,就不会执行222的那个get
});

app.get('/', (req, res)=>{
    console.log('/222222222222');
    res.write('<h1>/ 222222222</h1>');
    res.end();
});

app.listen(3000,()=>{
    console.log('服务器已经启动');
});