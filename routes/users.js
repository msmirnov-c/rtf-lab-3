const DBProvider = require("../dbprovider");
const express = require('express');
const router = express.Router();

router.post('/add', async function(req, res, next) {
    const {login, nick, pass} = req.body;
    if (!login || !nick || !pass)
        res.send({Error: 'NO PARAMS'});
    const db = new DBProvider();
    await db.addUser(login, nick, pass);
    db.close();
    res.send('Ok');
});

router.post('/', function(req, res, next) {
    const {login, nick, pass} = req.body;
    const db = new DBProvider();
    console.log(login, nick, pass);
    if ((!login && !nick) || !pass)
        res.send({Error: 'NO PARAMS'});
    if(login)
         db.getUserByLogin(login, pass, function(err, row) {
            res.json({login: row.login, nick: row.nick});
        });
    if(nick)
         db.getUserByLogin(nick, pass, function(err, row) {
            res.json({login: row.login, nick: row.nick});
         });
    db.close();
});

module.exports = router;
