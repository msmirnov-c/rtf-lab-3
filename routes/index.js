var express = require('express');
var router = express.Router();
const {signInUser, signUpUser} = require('../workers/auth/index');

/* GET home page. */
router.post('/signIn', signInUser);

router.post('/signUp', signUpUser);

module.exports = router;
