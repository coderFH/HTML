/*
const http = require('http');
let server = new http.Server();

// 当客户端请求到来的时候，该事件被触发
server.on('request', (req, res)=>{
    console.log(req);
    // 设置响应头的信息
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    res.write('<h1>hello, itfh</h1>');
    res.write('<h2>hello, aaaa</h2>');
    res.write('<h2>hello, aaaa</h2>');
    res.write('<h2>hello, aaaa</h2>');
    res.write('<h2>hello, aaaa</h2>');
    res.write('<h2>hello, aaaa</h2>');
    res.end();
});
server.listen(3000);
*/

/*const http = require('http');
let server = http.createServer((req, res)=>{
    let url = req.url;
    res.end('url:' + url);
});

// 运行服务器, 端口号可以任意改
server.listen(3000, '127.0.0.1');*/

const http = require('http');
http.createServer(function(req,res){
    console.log(req.complete);
    console.log(req.httpVersion);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.method);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("itfh");
    res.end();
}).listen(3000);
