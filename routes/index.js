var express = require('express');
var router = express.Router();
var path = require('path')

const Registration = require('../workers/reg/index');
const Authorization = require('../workers/auth/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user != undefined)
  {
    res.cookie('email', req.session.user.email)
  }
  console.log(req.session.user);
  res.sendFile(path.resolve('views/index.html'))
});

router.get('/reg', function(req, res, next) {
  res.sendFile(path.resolve('views/reg.html'))
});

router.get('/out', function(req, res, next) {
  delete req.session.user;
  res.clearCookie("email");
  console.log(req.session.user);
  res.redirect('/');
});

router.get('/auth', function(req, res, next) {
  res.sendFile(path.resolve('views/auth.html'))
});

router.post('/api/registration', Registration);

router.post('/api/authorization', Authorization)



module.exports = router;
