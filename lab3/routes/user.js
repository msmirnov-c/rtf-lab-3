
const {authUser, addNewUser} = require("../auth");
const User = require("../model/users");
const express = require('express');
const router = express.Router();

router.post('/reg', addNewUser);

router.post('/ent', authUser);

module.exports = router;