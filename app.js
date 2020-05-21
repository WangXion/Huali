var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bannerRouter=require('./routes/banner')
var contentRouter=require('./routes/content')
var hotRouter=require('./routes/hot')
var UnderwayRouter=require('./routes/underway')
var historyRouter=require('./routes/history')
var allordersRouter=require('./routes/allorders')
var updateRouter=require('./routes/update')//更新
var cors=require('cors')

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 配置cors跨域
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   // res.header("X-Powered-By",' 3.2.1')

//   next();
// });
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
//修改静态资源管理库
app.use('/',express.static(path.join(__dirname, 'Client/dist')));
app.use('/admin',express.static(path.join(__dirname, 'admin/dist')));

// app.use('/', indexRouter);//路由
app.use('/users', usersRouter);
app.use('/banner', bannerRouter);
app.use('/content', contentRouter);
app.use('/hot', hotRouter);
app.use('/underway', UnderwayRouter);
app.use('/history', historyRouter);
app.use('/allorders', allordersRouter);
app.use('/update', updateRouter);


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
