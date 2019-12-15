const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

router.get('/auth/:id', authUser);

router.post('/post/example', postExample)

module.exports = router;
