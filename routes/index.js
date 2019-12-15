const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());
//router.get('/auth', regPage);
router.post('/register', postExample);

module.exports = router;
