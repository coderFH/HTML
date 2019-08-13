const http = require('http');
const url = require('url');
const util = require('util');
const querystring = require('querystring');

http.createServer((req, res)=>{
   let postData = '';
   req.on('data', (chunk)=>{
       postData += chunk;
   });
   req.on('end', ()=>{
       console.log(postData);
       //querystring.parse:查询字符串 'name=zhangsan&pwd=1233&pwd=123456' 被解析成 字典的形式
       postData = querystring.parse(postData);
       res.end(util.inspect(postData));
   });
}).listen(3000, '127.0.0.1');


