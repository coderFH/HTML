import queryString from 'querystring'

export default (req,res,next)=>{
    //1. 过滤get请求
    if (req.method.toLowerCase() === 'get') {
        return next();
    }
    
    //2.如果是普通的表单提交,要处理
    //如果有文件,图片,音视频.... 不处理
    if (req.headers['content-type'].startsWith('multipart/form-data')) {
        return next();
    }

    //3.数据流的拼接
    let data = '';
    req.on('data',(chunk)=>{
        data += chunk;
    });
    req.on('end',()=>{
        // console.log(queryString.parse(data));
        req.body = queryString.parse(data);
        next();
    });
    // res.end('success');
}