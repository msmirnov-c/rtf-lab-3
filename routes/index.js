const { auth, register } = require('../workers/auth/index.js');
const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

/* GET users listing. */
router.post('/auth', auth);

router.post('/register', register)

module.exports = router;