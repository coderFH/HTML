//1. 引入
const express = require('./npm/node_modules/express');

//2. 创建一个server
const app = express();

//3.通过 app 根据路径处理 客户端传来 get 和 post 请求
app.get('/',(req,res)=>{
   res.write('<h1>Hello World!</h1>');
   res.end();
});

app.get('/itfh',(req,res)=>{
   res.write('<h1>itfh</h1>');
   res.end();
});

app.get('/it',(req,res)=>{
    res.write('<h1>it</h1>');
    res.end();
});

//4.开启监听
app.listen(3000,()=>{
    console.log('服务器已经启动');
});