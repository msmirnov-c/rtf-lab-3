var express = require('express');
var router = express.Router();
const CryptoJS = require('crypto-js');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
//создание/открытие базы данных
const db = new sqlite3.Database(path.join(__dirname, 'db.db'));
//создание таблицы пользователей
db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, password TEXT)');

/**
 * Метод принимает регистрации принимает в теле запроса 2 параметра login и psw - пароль
 * */
router.post('/reg', function (req, res) {
    const {login, psw} = req.body;
    if(!login || !psw) {
        res.send('Error!');
        return;
    }
    db.run(`INSERT INTO users VALUES('${login}','${CryptoJS.MD5(psw).toString()}')`, (err) => {
        if(err) {
            res.cookie('err', 'Sorry such user already exists');
            res.redirect('/reg.html');
        }
        else
        {
            res.cookie('err', '');
            res.cookie('login', login);
            res.redirect('/');
        }
            //res.json({login: login});
    });
});
/**
 * Метод принимает авторизации принимает в теле запроса 2 параметра login и psw - пароль
 *
 * */
router.post('/auth', function (req, res) {
    const {login, psw} = req.body;
    if(!login || !psw) {
        res.send('Error!');
        return;
    }
    const hash = CryptoJS.MD5(psw).toString();
    db.get(`SELECT login FROM users WHERE login = '${login}' AND password = '${hash}'`, (err, row) => {
        if(err || !row || !row.login) {
            res.cookie('err', 'Sorry such user does not exist');
            res.redirect('/auth.html');
        }
        else
        {
            res.cookie('err', '');
            res.cookie('login', row.login);
            res.redirect('/');
        }
    });
});

module.exports = router;
