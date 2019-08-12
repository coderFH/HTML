//1.引入模块
let mongoose = require('./npm/node_modules/mongoose');
mongoose.connect('mongodb://localhost/m_data');
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功');
});

//2.Schema(模式对象)
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name : String,
    age : Number,
    chat : String,
    sex : {
        type : String,
        default : '男'
    }
});

//3. 创建Model集合对象
let personModel = mongoose.model('person',personSchema);

//4. 往集合中插入文档
personModel.create({
   name : '周杰伦',
   age : 18,
   chat : 'jayZhou'
},(err)=>{
    if (!err) {
        console.log('插入成功');
    } else {
        throw err;
    }
});

//查找
personModel.find({},(err,docs)=>{
   if (!err) {
       console.log(docs[0]);
       console.log(typeof docs);
   }
});
