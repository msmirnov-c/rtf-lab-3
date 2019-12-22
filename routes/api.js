const { authentication, registration, logout } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/auth', authentication);
router.post('/post/example', registration);
router.get('/logout', logout);

module.exports = router;

