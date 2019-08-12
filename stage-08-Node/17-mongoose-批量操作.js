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
// personModel.create([
//     {name: '刘德华',age: 58,chat: '华仔667'},
//     {name: '王菲',age: 50,chat: 'wang', sex: '女'},
//     {name: '谢霆锋',age: 38,chat: 'xie'},
//     {name: '胡可',age: 18,chat: 'hkk1990', sex: '女'}
// ],(err)=>{
//     if (!err) {
//         console.log('插入成功');
//     } else {
//         throw err;
//     }
// });

// ================ 查找 ================
personModel.find({},(err,docs)=>{
   if (!err) {
       console.log(docs);
       console.log(typeof docs);
   }
});
personModel.find({name : '胡可'},(err,docs)=>{
    if (!err) {
        console.log(docs);
    }
});

//控制那些字段显示,默认是不显示,所以不显示的就不用再说明了
personModel.find({},{name : 1,_id : 0,sex : 1,chat : 1 },(err,docs)=>{
    if (!err ){
        console.log(docs);
    } else {
        throw err;
    }
});

//控制哪些字段显示,也可以用下面的方式(显示哪个 就写上去  _id默认是显示的 ,如果想不显示id,前面加-号)
personModel.find({}, "-_id name", {skip: 1, limit: 2}, (err, docs)=>{
    if(!err){
        console.log(docs);
    }else {
        throw err;
    }
});

// ================ 修改 ================
personModel.update({_id : '5d50d5e234d3d013b0c24797'},{$set : {age : 20,name : "林俊杰"}},(err)=>{
    if (!err) {
       console.log('修改成功!');
    } else {
        throw err;
    }
});

// multi（boolean）如果有多个doc，匹配到，是否一起更改（默认为false）
personModel.update({_id: '5d50d67e55bbe213b5edbd74'}, {$set: {age: 10, chat: '我要学IT'}}, {multi: true}, (err)=>{
    if(!err){
        console.log('修改成功!');
    }else {
        throw err;
    }
});


// ================ 删除 ================
personModel.remove({name: '周杰伦'}, (err)=>{
    if(!err){
        console.log('删除成功!');
    }else {
        throw err;
    }
});

// ================ 统计个数 ================
personModel.count({},(err,count)=>{
    if (!err) {
        console.log(count);
    }else {
        throw err;
    }
});
