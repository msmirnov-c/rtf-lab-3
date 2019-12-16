//const { authUser, postExample } = require('../workers/auth/index.js');
const {postExample}= require('../workers/auth/index.js');
const {Enter1}= require('../workers/auth/Enter.js');
var express = require('express');
var router = express.Router();

router.use(express.json());       // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies
router.post('/register', postExample);
router.post('/Enters', Enter1);
module.exports = router;
