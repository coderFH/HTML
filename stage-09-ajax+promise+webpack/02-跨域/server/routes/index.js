var express = require('express');
var router = express.Router();

//01-验证跨域问题和静态资源文件不存在跨域问题
/*
router.get('/', function(req, res, next) {
   console.log(`收到客户端的请求: ${req.url}`);
   // res.end('hello world!');
   //验证静态资源是不存在跨域问题的
   //在one.htm文件中 <!--<link rel="stylesheet" href="http://localhost:3000/">-->
   //这么写 可以把背景变成紫色,就证明静态资源是不存在跨域问题的
   res.end('body{ background-color: purple}');
});*/


//02-利用服务器去调用本地定义好的一个函数,实现跨域
/*router.get('/', function(req, res, next) {
   console.log(`收到客户端的请求: ${req.url}`);
   var data = JSON.stringify({
      status_code: 200,
      result: {
         name: '张三',
         age: 18,
         friends: ['李四', '王五', '赵六']
      }
   });
   //02-利用服务器去调用本地定义好的一个函数,实现跨域
   res.end(`getData(${data});`);
   //执行客户端的getData函数
   // res.end(`${req.query.callback}(${data});`);
});*/

//03-解决有多个跨域的问题
router.get('/', function(req, res, next) {
   console.log(`收到客户端的请求: ${req.url}`);
   var data = JSON.stringify({
      status_code: 200,
      result: {
         name: '张三',
         age: 18,
         friends: ['李四', '王五', '赵六']
      }
   });
   //执行客户端的回调函数
   res.end(`${req.query.callback}(${data});`);
});

module.exports = router;
