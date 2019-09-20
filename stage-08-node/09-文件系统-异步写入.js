//1.引入模块
let fs = require('fs');

//2. 打开文件
fs.open('/Users/wangfh/HTML/stage-08-Node/file/异步写入.txt','a+',(err,fd)=>{
    //2.1 判断是否出错
    if (!err) {
        //2.2 写入文件
        fs.writeFile(fd,'现在在学h5,以后复习看到了,你在干啥,在哪',(err)=>{
            //2.3 写入成功
            if (!err) {
                console.log('写入文件成功');
            } else {
                throw err;
            }

            //2.4 关闭文件
            fs.close(fd,(err)=>{
                if (!err) {
                    console.log('文件已经保存并关闭');
                }
            })
        });
    } else {
        throw err;
    }
});

//3.其他操作
console.log('其他操作');
