var express = require('express');
var path = require('path');
var cookieParser = require('cookieparser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

var app = express();
var cookieFiles = require('cookiefiles')

app.use(cookieFiles({
    name: 'files',
    cookie: 'cookie'
}))

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;