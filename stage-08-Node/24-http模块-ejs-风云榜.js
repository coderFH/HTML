let http = require('http');
let fs = require('fs');
let ejs = require('./npm/node_modules/ejs');

// 1. 创建服务器
http.createServer((req, res) => {
    // 1.1 读取数据
    getDataJson((jsonData) => {
        // 1.2 读取模板信息
        fs.readFile('./stage-08-Node/views/fengyunbang.ejs', (err, data) => {
            let ejsList = data.toString();
            console.log(ejsList);
            // 1.3 实例化模板
            let tmp = ejs.render(ejsList, jsonData);

            //  1.4 返回界面
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
            res.end(tmp);
        });
    });
}).listen(3000);

let getDataJson = (callBack) => {
    fs.readFile('./stage-08-Node/file/data.json', (err, data) => {
        if (!err) {
            let jsonData = JSON.parse(data);
            callBack(jsonData);
        } else {
            throw err;
        }
    })
};