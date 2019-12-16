var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();

const fs = require("fs");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.get("/reg", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/reg.html");
});

app.post("/reg", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  let login = request.body.login;
  let password = request.body.password;
  let arr = ReadPass();
  let find = false;
  for (let i=0; i < arr.length; i++) {
    if (arr[i].login == login) {
      find = true;
      break;
    }
  }
  if ((login != "") && (!find) && (password != "") && (login.indexOf(" ")==-1) && (password.indexOf(" ")==-1)) {
    fs.appendFileSync("pass.txt", login + " ")
    fs.appendFileSync("pass.txt", password + " ")
    response.redirect("/reg/input");
  }
  else { 
    response.redirect("/reg/err");
  }
});

app.get("/", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/reg/err", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/err.html");
});

app.get("/reg/input", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/input.html");
});

app.get("/auth", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/index_reg.html");
});

app.get("/log", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/log.html");
});

app.post("/log", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  let login = request.body.login;
  let password = request.body.password;
  let arr = ReadPass();
  let findUser = false;
  for (let i=0; i < arr.length; i++) {
    console.log(arr[i].login);
    console.log(arr[i].password);
    if ((arr[i].login == login)&&(arr[i].password == password)) {
      findUser = true;
      break;
    }
  }
  if (findUser) {
    response.redirect("/reg/input");
  }
  else { 
    response.redirect("/reg/err");
  }
});

app.post("/", urlencodedParser, function (request, response) {
  console.log(request.body);
});

class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }
}

function ReadPass() {
  let fileContent = fs.readFileSync("pass.txt", "utf8");
  passStr = fileContent.split(' ');
  let j=0;
  var passData = new Array();
  for (let i=0; i<passStr.length; i=i+2)
  {
    passData[j] = new User(passStr[i], passStr[i+1]);
    j++;
  }
  return passData;
}

module.exports = app;
