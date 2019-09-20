import {join} from 'path'

// 上边一句等于es5中这样的写法
// let path  = require('path');
// path.join();

export default {
    viewPath : join(__dirname,'../views'),
    publicPath : join(__dirname,'../public'),
    node_modules : join(__dirname,'../node_modules'),
    upload_path: join(__dirname, '../public/uploads')
}