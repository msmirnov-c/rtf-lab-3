const { authUser, postExample } = require('../workers/auth/index.js');
const registrUser = require('../public/reg.js');
var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/post/example', postExample)

//router.get('/reg', registrUser)

//router.post('/reg', function(req, res, next) {
 //   console.log(req.body);
 //   res.json({Success: true})
//});

module.exports = router;
