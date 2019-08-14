var express = require('express');
var router = express.Router();
var util = require('./../util/util');

router.get('/', function(req, res, next) {
  res.render('register');
});

router.post('/',(req, res, next)=>{
    //1. 获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    // 2. 处理数据
    // 2.1 生成用户对象
    let regUser = {
        userName : userName,
        loginPwd : loginPwd
    };

    // 2.2 验证当前用户是否已经注册
    let user = util.isReg(regUser,util.users);
    if(null === user || undefined === user){ // 没有注册
        util.users.push(regUser);
        res.redirect('login');
    }else { // 已经注册
       res.send('当前的用户已经注册!');
    }
});

module.exports = router;