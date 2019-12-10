const path = require('path');
const DbClient = require('../../database/DbClient');
const CryptoJS = require("crypto-js");
const User = require('../../models/user');

async function authUser(req, res, next) {
    console.log('autuser');
    console.log(req);
    const db = new DbClient();
    let strings = db.GetAllUsers();
    res.json({strings});
}

/**
* Метод принимающий 3 парамметра
* @param {string} nick- ник
* @param {string} email - почта
* @param {string} pass - пароль
 * @param {string} answer - ответ на секретный вопрос
*/
async function postExample(req, res, next){
    const {email, nick, pass, answer} = req.body;
    if (!email || !nick || !pass || !answer) {
        res.send({Error: 'NO PARAMS'});
    }
    const db = new DbClient();
    const hashPass= await CryptoJS.MD5(pass).toString();
    const hashAnswer = await CryptoJS.MD5(answer).toString();
    await db.AddUser(email, nick, hashPass, hashAnswer, async function (err, row) {
             if (err) {
            res.send(err.toString());
            console.log(err);
            throw err
        }
    });
    console.log(email, nick, hashPass, hashAnswer);
    res.json({Success : true});
    db.close();
}


module.exports =  {
    authUser,
    postExample
}
