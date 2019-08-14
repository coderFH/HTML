import express from 'express'
import config from './config'

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

app.get('/',(req,res,next)=>{
    res.render('index.html');
});


app.listen(3000,()=>{
    console.log('server is running');
});

