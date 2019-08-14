//引入各种包文件
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入路由文件
var indexRouter = require('./routes/index');
//注意: 新引入的路由文件 一定要在这里导入
var regRouter = require('./routes/reg');
var loginRouter = require('./routes/login');
var chatRouter = require('./routes/chat');

//生成express实例
var app = express();

//下边的全是中间件
// view engine setup
//设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//使用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//在上边引入模块之后,一定要使用中间件进行配置
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/reg', regRouter);
app.use('/chat', chatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//找不到路由对应的页面
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
