import express from 'express'
import config from './config'

//引入路由文件
import indexRouter from './../router/index'
import sowingRouter from './../router/sowing'

//引入中间件
import bodyParser from './../middle_wares/body_parser'
import errorLog from  './../middle_wares/error_log'

//引入模板引擎
import nunjucks from 'nunjucks'

const app = express();

//1.设置模板引擎
nunjucks.configure(config.viewPath,{
    autoesacpe : true,
    express : app,
    noCache : true
});

// 2. 配置静态的资源
app.use(express.static(config.publicPath));
app.use('/node_modules',express.static(config.node_modules));

//注意:一定要在路由之前,挂载中间件
app.use(bodyParser);

//挂载路由容器
app.use(indexRouter);
app.use(sowingRouter);

//6.挂载错误的中间件
//错误的中间件,放这里比较合适
app.use(errorLog);

app.listen(3000,()=>{
    console.log('server is running');
});

