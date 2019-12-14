var express = require('express');
var router = express.Router();
const CryptoJS = require('crypto-js');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, 'db.db'));
db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, password TEXT)');

router.post('/reg', function (req, res) {
    const {login, psw} = req.body;
    if(!login || !psw) {
        res.send('Error!');
        return;
    }
    db.run(`INSERT INTO users VALUES('${login}','${CryptoJS.MD5(psw).toString()}')`, (err) => {
        if(err)
            res.send(err);
        else
            res.redirect('/');
    });
});

module.exports = router;
