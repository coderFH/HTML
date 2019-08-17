const express = require('./npm/node_modules/express');
const app = express();
const fs = require('fs');
const path = require('path');
const formidable = require('./npm/node_modules/formidable'); //处理上传图片的工具

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.get('/', (req, res, next)=>{
    res.render('31-ajax-index');
});

// app.post('/', (req, res, next)=>{
//     let data = '';
//     req.on('data', chunk=>{
//        data += chunk;
//     });
//     req.on('end', ()=>{
//         fs.writeFile('./stage-08-Node/file/data.txt', data, (err)=>{
//             if(!err){
//                 res.end('success');
//             }
//         })
//     })
// });

app.post('/', (req, res, next)=>{
    // 1. 初始化
    const form = new formidable.IncomingForm();
    // 2. 指定上传文件的路径
    form.uploadDir = './stage-08-Node/file/';
    // 3. 保存原来的扩展名
    form.keepExtensions = true;
    // 4. 解析表单的数据
    /**
     * err 错误
     * fields 普通的表单字段
     * files 文件的内容
     */
    form.parse(req, function(err, fields, files) {
        if(err){
            throw err;
        }
        console.log(fields);
        // console.log(files);
        res.end('success');
    });
});

app.listen(3000, ()=>{
   console.log('server running.....');
});