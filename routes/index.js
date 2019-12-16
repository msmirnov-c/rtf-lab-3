const Registration = require('../workers/registration/index');
const Authorization = require('../workers/authorization/index');
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.user) {
    res.cookie('name', req.session.user.name);
    res.cookie('surname', req.session.user.surname);
    res.cookie('email', req.session.user.email);
  } else {
    res.clearCookie('name');
    res.clearCookie('surname');
    res.clearCookie('email');
  }
  res.sendFile(path.resolve('views/index.html'));
});

router.get('/registration', function (req, res, next) {
  res.sendFile(path.resolve('views/registration.html'));
})

router.post('/api/registration', Registration);

router.get('/authorization', function (req, res, next) {
  res.sendFile(path.resolve('views/authorization.html'));
})

router.get('/logout', function(req, res, next) {
  delete req.session.user;
  res.redirect('/');
})

router.post('/api/authorization', Authorization);

module.exports = router;