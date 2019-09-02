var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//wfh-引入session,用于报错验证码,和用户输入的做对比使用
var session = require('express-session');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');

var app = express();

//允许客户端进行跨域操作
app.all("*", function(req, res, next) {
  if (!req.get("Origin")) return next();
  // use "*" here to accept any origin
  res.set("Access-Control-Allow-Origin","*");
  res.set("Access-Control-Allow-Methods", "GET");
  res.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ("OPTIONS" === req.method) return res.sendStatus(200);
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//wfh---配置session
app.use(session({
  secret : '12345',// 对sessionId进行cookie签名
  cookie : {maxAge : 100 * 60 * 60 *24},//设置session的有效时间,单位ms
  resave : false,
  saveUninitialized : true,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
