var express = require('express');
var router = express.Router();
const {authUser, registerUser} = require('../workers/auth/index');
console.log('[The server is running]');

router.post('/auth', authUser);

router.post('/register', registerUser);

module.exports = router;
