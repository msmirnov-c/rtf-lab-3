
const {getUser, addNewUser} = require("../authorisation");
const User = require("../model/user");
const express = require('express');
const router = express.Router();

router.post('/add', addNewUser);

router.post('/', getUser);

module.exports = router;
