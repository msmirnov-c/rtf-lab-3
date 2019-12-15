const regirstation = require('../worker/registration/index')
const authorization = require('../worker/authorization/index')

var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user);
  res.cookie('userName', req.session.user.userName);
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/registration', function(req, res, next) {
  res.sendFile(path.resolve('views/registration.html'));
});

router.get('/authorization', function(req, res, next) {
  res.sendFile(path.resolve('views/authorization.html'));
});

router.post('/api/registration', regirstation)
router.post('/api/authorization', authorization)

module.exports = router;
