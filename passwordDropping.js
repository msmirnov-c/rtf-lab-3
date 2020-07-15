const mail = require('nodemailer');
const User = require('./model/user');
const DBProvider = require('./dbprovider');
const CryptoJS = require('crypto-js');

const transporter = mail.createTransport({
    service: 'Gmail',
    auth: {
        user: 'simple.auth.service@gmail.com',
        pass: 'by.password13'
    }
});

function sendPassword(address, password, onend) {
    const mailOptions = {
        from: 'Служба авторизации',
        to: address,
        subject: 'Сброс пароля',
        html: `<h3>Пароль успешно сброшен</h3>Ваш новый пароль: ${password}`
    };

    transporter.sendMail(mailOptions, onend);
}

function generatePassword() {
    let res = '';
    for (let i = 0; i < 10; i++)
        res += String.fromCodePoint(Math.round(48 + Math.random() * 74));
    return res;
}

/**
 * Метод принимающий в теле запроса 1 парамметр
 * @param {string} email - почта
 */
function dropPassword(req, res) {
    const {email} = req.body;
    const newPass = generatePassword();
    const db = new DBProvider();
    db.getUserByOnlyEmail(email,  function(err, row) {
        if(row === undefined)
            res.json({Error: 'Пользователь с таким e-mail не найден'});
        else {
            const newUserData = new User(email, row.nick,
                CryptoJS.MD5(newPass));
            db.changeUser(email , newUserData, err => {
                //newUserData.pass = undefined;
                //res.json(newUserData);
                //res.location('/');
                sendPassword(email, newPass, (err, info) => res.json({Error: err, Info: info}));
            });
        }
    });
}

module.exports = dropPassword;
