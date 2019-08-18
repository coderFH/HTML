const fs = require('fs');

/*
fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
    console.log(data.toString());
});

fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
    console.log(data.toString());
});

fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
    console.log(data.toString());
});
*/

/*
  回调地狱
  解决方案: Promise
*/
fs.readFile(__dirname + '/data/a.txt', (err, data)=>{
    console.log(data.toString());
    fs.readFile(__dirname + '/data/b.txt', (err, data)=>{
        console.log(data.toString());
        fs.readFile(__dirname + '/data/c.txt', (err, data)=>{
            console.log(data.toString());
        });
    });
});


