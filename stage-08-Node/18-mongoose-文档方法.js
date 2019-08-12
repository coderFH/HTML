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

//4. 创建Model集合对象
// let person = new personModel({
//     name: '宋小宝',
//     age: 40,
//     chat: 'song'
// });
//
// person.save((err, doc)=>{
//     if(!err){
//         console.log(doc);
//     }
// });

personModel.findOne({name: '宋小宝'}, (err, doc)=>{
    if(!err){
        // 修改
        doc.update({$set: {age: 28}}, (err)=>{
            if(!err){
                console.log('修改成功!!!!!');
                console.log(doc);
            }
        });

        /*
          get(name)
            获取文档中的指定属性值
          set(name , value)
            设置文档的指定的属性值
          toJSON()
            转换为一个JSON对象
          toObject()
            将Document对象转换为一个普通的JS对象
            转换为普通的js对象以后，注意所有的Document对象的方法或属性都不能使用了
        */
        console.log(doc.get('name'));
        console.log(doc.age);
        console.log(doc.chat);

        doc.set('chat', 'xiaobao');
        doc.age = 18;
        console.log(doc);

        console.log(doc.get('name'));
        console.log(doc.age);
        console.log(doc.chat);

        // 
        console.log(doc.toJSON());
        console.log(doc.toObject());
    }
});