const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/auth', authUser);
router.post('/post/example', postExample);

module.exports = router;

