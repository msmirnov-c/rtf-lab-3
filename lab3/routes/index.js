const { authUser, postExample } = require('../auth/auth.js/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auth/:login', authUser);

router.post('/post/example', postExample)

module.exports = router;
