//1.引入模块
let mongoose = require('./npm/node_modules/mongoose');

//mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名');
// 如果端口号是默认端口号（27017） 则可以省略不写
mongoose.connect('mongodb://localhost/m_data');

//2. 监听各种状态
let db = mongoose.connection;

//2.1 连接失败
db.on('errpr',()=>{
    console.log('连接数据库失败');
});

//2.2 数据库连接成功
db.once('open',()=>{
    console.log('数据库连接成功');
});

//2.3 数据库断开连接
db.once('close',()=>{
    console.log('数据库断开成功');
});

mongoose.disconnect();
