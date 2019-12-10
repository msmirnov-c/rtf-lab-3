
const {getUser, addNewUser, changeUser, editUser} = require("../authorisation");
const User = require("../model/user");
const express = require('express');
const router = express.Router();

router.post('/add', addNewUser);

router.post('/', getUser);

router.post('/change', changeUser);

router.post('/edit', editUser/*(req, res) => res.render('edit.hbs', {nick: "my nick", email: 'AS@qASD'})*/);

module.exports = router;
