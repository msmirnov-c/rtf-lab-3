const { authUser, postExample } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/auth/:id', authUser);
router.use(express.json());
router.use(express.urlencoded());
router.post('/auth', auth)
module.exports = router;
