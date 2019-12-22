var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');
var expressHandlebars = require('express-handlebars');

var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'layout' }))
app.set('view engine', 'jade');

//middleware for bodyparser, cookie, session
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    secret: "application_secret",
    resave: false,
    saveUninitialized: false
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'design')));

// app.use(passport.initialize())
// app.use(passport.session())


app.use('/api', apiRouter);
app.use(indexRouter);

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
  var jade = require('jade');
  var html = jade.renderFile('./views/error.jade', res.locals);
  res.send(html)
});

module.exports = app;