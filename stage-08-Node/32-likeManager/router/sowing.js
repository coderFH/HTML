import express from 'express'
import Sowing from './../models/Sowing'

const router = express.Router({});

/*
* 往数据库中插入一条新纪录
* */
router.post("/sowing/api/add",(req,res,next)=>{
    //1.接受表单提交过来的数据
    const body = req.body;

    //2.操作数据库
    const sowing = new Sowing({
        //图片名称  required:该字段不可忽略
        image_title :body.image_title,
        //图片的地址
        image_url : body.image_url,
        //图片的链接
        image_link : body.image_link,
        //上架时间
        s_time: body.s_time,
        //下架时间
        e_time :body.e_time,
        //当前编辑时间
        c_time : body.c_time,
        //最后编辑时间
        l_time : body.l_time,
    });

    sowing.save((err,reslut)=>{
        if (err) {
            throw err;
        }
        //这一步相当于  queryString.parse({})
        res.json({
            status : 200,
            result : '添加数据成功'
        });
    })
});

module.exports = router;