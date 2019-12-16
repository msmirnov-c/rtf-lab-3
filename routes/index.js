const regirstation = require('../worker/registration/index')
const authorization = require('../worker/authorization/index')

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {

  if (req.session.user != undefined){
    res.cookie('userName', req.session.user.userName);
  }
  console.log(req.session.user);
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/out', function(req, res, next) {
  delete req.session.user;
  res.clearCookie("userName");
  console.log(req.session.user);
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/authorization', function(req, res, next) {
  res.sendFile(path.resolve('views/authorization.html'));
});

router.get('/registration', function(req, res, next) {
  res.sendFile(path.resolve('views/registration.html'));
});

router.post('/api/registration', regirstation)
router.post('/api/authorization', authorization)

module.exports = router;
