const http = require('http');
const url = require('url');
//util 模块主要用于支持 Node.js 内部 API 的需求。
const util = require('util');

http.createServer((req,res)=>{
    //1.设置响应头
    res.writeHead(200,{'content-type': 'text/html; charset=utf-8'});
    //2.设置响应的内容
    //url.parse() 可以将一个完整的URL地址, 分为很多部分
    //util.inspec:一个将任意对象转换为字符串的方法，通常用于调试和错误输出。
    res.write(util.inspect(url.parse(req.url,true)));
    res.end();
}).listen(3000,'127.0.0.1');
