const {register}= require('../workers/registration/Reg.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(express.json());
router.use(express.urlencoded());
router.post('/registration', registration);
module.exports = router;