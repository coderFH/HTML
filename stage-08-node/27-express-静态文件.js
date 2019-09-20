const express = require('./npm/node_modules/express');
const fs = require('fs');
const path = require('path');

const app = express();


// 1. 配置静态资源文件夹
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next)=>{
    console.log(path.join(__dirname, 'public'));
    res.end();
    next();
});

app.listen(3000, ()=>{
    console.log('服务器已经启动');
});