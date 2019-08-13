const express = require('./npm/node_modules/express');
let path = require('path');
let app = express();

// 1. 指定视图所在的位置
app.set('views', path.join(__dirname, 'views'));
// 2. 注册模板引擎
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('list', {"lists": ["张三", "李四", "王五","赵六"]});
});

app.listen(3000);


