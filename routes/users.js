
const {getUser, addNewUser, changeUser, editUser} = require("../authorisation");
const dropPassword = require('../passwordDropping');
const User = require("../model/user");
const express = require('express');
const router = express.Router();

router.post('/add', addNewUser);

router.post('/', getUser);

router.post('/change', changeUser);

router.post('/edit', editUser);

router.post('/passdrop', dropPassword);

module.exports = router;
