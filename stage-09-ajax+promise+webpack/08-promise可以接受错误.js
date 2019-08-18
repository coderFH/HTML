const fs = require('fs');

// 1. 创建一个Promise对象 (一经创建, 立马执行)
readFile(__dirname + '/data/bb.txt', 'utf8')
    .then((data) => {
        console.log(data.toString());
        return readFile(__dirname + '/data/aq.txt', 'utf8');
    })
    .then((data) => {
        console.log(data.toString());
        return readFile(__dirname + '/data/c.txt', 'utf8');
    })
    .then((data) => {
        console.log(data.toString());
    }).catch(err => {
        console.log(err);
});

function readFile(...args) {
    return new Promise((resolve, reject) => {
        fs.readFile(...args, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}