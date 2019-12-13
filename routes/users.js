
const {getUser, addNewUser, changeUser} = require("../authorisation");
const dropPassword = require('../passwordDropping');
const User = require("../model/user");
const express = require('express');
const router = express.Router();

router.post('/add', addNewUser);

router.post('/', getUser);

router.post('/change', changeUser);

//router.get('/edit', (req, res) => res.sendFile(path.join(__dirname , 'edit.html')));

router.post('/passdrop', dropPassword);

module.exports = router;
