var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended: false});

/**
 * Метод принимающий 3 параметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */

function infoMess()
{
  return 'fdfd';
}

function registrUser(req, res, next) {
  // res.sendFile(__dirname + "/reg.html");
   console.log(req.body);
}

function registrUser1(req, res, next) {
    app.post("/reg", urlencodedParser, function (request, response) {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        //response.sendFile(__dirname + "/public/reg.html");
      });
}

module.exports = registrUser;
