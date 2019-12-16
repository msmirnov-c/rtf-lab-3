var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var authRouter = require('./routes/authRouter');
//const bcrypt = require( 'bcryptjs' );
var app = express();


//app.listen(3000)

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(bcrypt);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/register', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/register.html')
})
app.post('/register', urlencodedParser, function(request, response) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)

})

app.get('/authorisation', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/public/authorisation.html')
})
app.post('/authorisation', urlencodedParser, function(request, response) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)
  response.send(`${request.body.userName} - ${request.body.userAge}`)
})




app.use('/api', indexRouter);
app.use('/api', authRouter);
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
