const express = require('./npm/node_modules/express');
let path = require('path');
let fs = require('fs');
let app = express();

// 1. 指定视图所在的位置
app.set('views', path.join(__dirname, 'views'));
// 2. 注册模板引擎
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    getDataJson((data)=>{
        res.render('fengyunbang', data);
    });
});

const getDataJson = (callBack)=>{
    fs.readFile('./stage-08-Node/file/data.json', (err, data)=>{
        if(!err){
            callBack(JSON.parse(data));
        }else {
            throw err;
        }
    })
};

app.listen(3000);