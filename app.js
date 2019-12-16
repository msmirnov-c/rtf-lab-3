var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var RegRouter = require('./routes/Reg');
//var error = require("views/error");
var app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/reg', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/Reg.html')
})

app.get('/Enter', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/Enter.html')
})

app.get('/KEKW', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/KEKW.html')
})

app.get('/', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
})

app.use('/', indexRouter);
//app.use('/reg', RegRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'jade');


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
