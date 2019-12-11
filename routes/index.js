const { authUser, postExample, postExists } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.post('/postNewUser', postExample);
router.post('/postExistsUser', postExists);
router.get('/auth', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/authorisation.html'));
});
router.get('/join', function(req, res, next) {
       //if(!localStorage.getItem(user))
        res.sendFile(path.join(__dirname, '../public/registration.html'));
      //  else  res.redirect('/');
});

module.exports = router;

