const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.post('/post', postExample);
router.get('/auth/:id', authUser);

module.exports = router;

