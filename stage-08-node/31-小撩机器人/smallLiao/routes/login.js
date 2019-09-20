var express = require('express');
var router = express.Router();
let util = require('./../util/util');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', (req, res, next) =>{
    // 1. 获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    // 2. 处理数据
    // 2.1 生成用户对象
    let loginUser = {
        userName : userName,
        loginPwd : loginPwd
    };

    // 2.2  验证当前用户是否已经注册
    let user = util.isReg(loginUser, util.users);
    if (user === null || undefined === user) {
        res.send('当前的用户不存在!');
    } else {
        // 2.3 判断密码
        if (user.loginPwd === loginPwd) { // 密码正确
            res.redirect('/chat');
        } else {
            res.send('用户名或者密码错误!');
        }
    }
});

module.exports = router;