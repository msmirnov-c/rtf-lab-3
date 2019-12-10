const { authUser, postExample } = require('../workers/auth/index.js');
let Client= require('../database/Client.js');
var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

/* GET home page. */
router.post('/post', postExample);
router.get('/auth/:id', authUser);
let cl = new Client;

module.exports = router;

