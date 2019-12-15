var express = require('express');
var router = express.Router();
const registr = require('../workers/registration');
const authoriz = require('../workers/authorization');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/index.html'));
});

router.get('/registration', function(req,res,next) {
  res.sendFile(path.resolve('public/registration.html'));
});

router.get('/authorization', function(req,res,next) {
  res.sendFile(path.resolve('public/authorization.html'));
});

router.post('/api/registration', registr)
router.post('/api/authorization', authoriz)

module.exports = router;
