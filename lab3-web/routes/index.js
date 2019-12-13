const {register}= require('../workers/register/register.js');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth/:id', authUser);
router.post('/register', register);
module.exports = router;