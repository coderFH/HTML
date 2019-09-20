const express = require('./npm/node_modules/express');
const fs = require('fs');
const app = express();

app.get('/', (req, res, next)=>{
    try {
        const data = JSON.parse('{name:');
        res.json(data);
    }catch (e) {
        next(e);
    }
});

app.get('/b', (req, res, next)=>{
    fs.readFile('./cswfwefd', (err, data)=>{
        if(err){
            next(err);
        }
    })
});

app.get('/a', (req, res, next)=>{
    res.end('hello');
});

/*
  统一处理各种错误, 记入日志
 */
app.use((err, req, res, next)=>{
    const error_log = `
    =====================================
    错误名: ${err.name},\n
    错误消息: ${err.message}, \n
    错误时间: ${new Date()}, \n
    错误堆栈: ${err.stack}
    ===================================== 
    \n
    `;
    fs.appendFile('./stage-08-Node/file/err_log.txt', error_log, err =>{
        res.writeHead(500, {"Content-Type": "text/html;charset=utf-8"});
        res.end('500 服务器内部错误')
    });
});

// 404
app.use((req, res, next)=>{
    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
    res.end('您当前访问的页面不存在!!!!');
});


app.listen(3000, ()=>{
   console.log('running.....') ;
});
