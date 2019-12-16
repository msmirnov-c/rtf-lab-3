//const { authUser, postExample } = require('../workers/auth/index.js');
const {authorisation}= require('../workers/authorisation/auth.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/auth/:id', authUser);
router.use(express.json());       // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies
//router.post('/post/example', postExample);

router.post('/authorisation', authorisation);

module.exports = router;
