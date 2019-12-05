const DBProvider = require("../dbprovider");
const User = require("../model/user");
const express = require('express');
const router = express.Router();

router.post('/add', async function(req, res, next) {
    const {email, nick, pass} = req.body;
    if (!email || !nick || !pass) {
        res.send({Error: 'NO PARAMS'});
        return;
    }
    const db = new DBProvider();
    await db.addUser(new User(email, nick, pass));
    await db.getUserByEmail(email, pass, function(err, row) {
        res.json({email: row.email, nick: row.nick});
    });
    db.close();
    //res.send('Ok');
});

router.post('/', function(req, res, next) {
    const {login: email, nick, pass} = req.body;
    const db = new DBProvider();
    console.log(email, nick, pass);
    if ((!email && !nick) || !pass)
        res.send({Error: 'NO PARAMS'});
    if(email)
         db.getUserByEmail(email, pass, function(err, row) {
            res.json({email: row.email, nick: row.nick});
        });
    if(nick)
         db.getUserByNick(nick, pass, function(err, row) {
            res.json({email: row.email, nick: row.nick});
         });
    db.close();
});

module.exports = router;
