var express = require('express');
var router = express.Router();
const { logInUser, logOutUser } = require('../workers/db/auth');
const { regUser } = require('../workers/db/reg');
const { mainPage, authPage, regPage } = require('../workers/local/index');

/* GET home page */
router.get('/', mainPage);

/* GET authorization page */
router.get('/auth', authPage);

/* GET registration page */
router.get('/reg', regPage);

/* GET log out  */
router.get('/logout', logOutUser);

/* POST user data to log in */
router.post('/post/auth', logInUser);

/* POST user data to regiser */
router.post('/post/reg', regUser);

module.exports = router;
