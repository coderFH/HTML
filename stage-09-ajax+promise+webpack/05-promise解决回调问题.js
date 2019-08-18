const fs = require('fs');

// 1. 创建一个Promise对象 (一经创建, 立马执行)
new Promise((resolve, reject)=>{
    fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    });
}).then((data)=>{
    console.log(data.toString());
    return new Promise((resolve, reject)=>{
        fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
}, (err)=>{
    console.log('读取文件失败!');
}).then((data)=>{
    console.log(data.toString());
    return new Promise((resolve, reject)=>{
        fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        });
    })
}).then((data)=>{
    console.log(data.toString())
});