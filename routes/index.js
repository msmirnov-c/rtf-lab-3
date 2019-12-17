const { registrate, authenticate } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/post/auth', authenticate);
router.post('/post/example', registrate);

module.exports = router;