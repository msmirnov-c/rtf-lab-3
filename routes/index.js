const { authUser, regUser } = require('../workers/auth/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auth', authUser);

router.post('/reg', regUser)

module.exports = router;
