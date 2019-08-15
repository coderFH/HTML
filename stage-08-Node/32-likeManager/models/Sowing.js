import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/lk_data');

const sowingSchema = mongoose.Schema({
    //图片名称  required:该字段不可忽略
    image_title : {type : String,required : true},
    //图片的地址
    image_url : {type : String,required : true},
    //图片的链接
    image_link : {type : String,required : true},
    //上架时间
    s_time: {type : Date,required : true},
    //下架时间
    e_time : {type : Date,required : true},
    //当前编辑时间
    c_time : {type : Date,default : Date.now},
    //最后编辑时间
    l_time : {type : Date,default : Date.now},
});

const Sowing = mongoose.model('Sowing',sowingSchema);

module.exports = Sowing;