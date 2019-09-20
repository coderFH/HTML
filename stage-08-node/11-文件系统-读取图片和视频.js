let fs = require('fs');

//1.读取图片
fs.readFile('/Users/wangfh/HTML/stage-08-Node/images/01.jpeg',(err,data)=>{
    //1.1 判断
    if (!err) {
        //1.2 写入图片文件
        fs.writeFile('/Users/wangfh/HTML/stage-08-Node/file/读取图片.jpeg',data,(err)=>{
            if (!err) {
                console.log('写入成功');
            } else {
                throw err;
            }
        })
    } else {
        throw err;
    }
});

//2.读取视频
// 2. 读取视频文件
fs.readFile('/Users/wangfh/HTML/stage-08-Node/images/lk.mp4', (err, data)=>{
    // 1.1 判断
    if(!err){
        // 1.2 写入图片文件
        fs.writeFile('/Users/wangfh/HTML/stage-08-Node/file/读取视频.mp4', data, (err)=>{
            if(!err){
                console.log('写入成功!');
            }else {
                throw err;
            }
        })
    }else {
        throw err;
    }
});
