let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');


// 1. 创建服务器
http.createServer((req, res)=>{
    // 1.1 获取url的路径
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;

    // 1.2 处理路径
    if(pathName.lastIndexOf('.') === -1){ // 没有
        pathName += '/index.html';
    }

    //path.normalize();将路径规范化
    //   /stage-06-小型框架/bootstrap案例
    let fileUrl = '.' + path.normalize(pathName);
    console.log(fileUrl);

    // 取出文件的后缀
    let extName = path.extname(fileUrl);
    console.log(extName);

    // 1.3 读取文件
    fs.readFile(fileUrl, (err, data)=>{
         // 1.3.1 没有找到
         if(err){
             res.writeHead(404, {'content-type': 'text/html; charset=utf-8'});
             res.end('<h1>404, 当前页面找不到!</h1>');
         }
         // 1.3.2 找到
         getContentType(extName, (contentType)=>{
             res.writeHead(200, {'content-type': contentType});
             res.end(data);
         })
    });

}).listen(3000);


/*
  获取contentType
 */
let getContentType = (extName, callBack)=>{
    // 1. 读取文件
    fs.readFile('./stage-08-Node/file/mime.json', (err, data)=>{
        if(err){
            throw err;
            return;
        }
        let mineJson = JSON.parse(data);
        let contentType = mineJson[extName] || 'text/plain';
        callBack(contentType);
    })
};