const {register}= require('../workers/register/register.js');

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.use(express.json());       // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies

router.post('/register', register);


module.exports = router;
