const mail = require('nodemailer');
const User = require('./model/user');
const DBProvider = require('./dbprovider');
const CryptoJS = require('crypto-js');

const transporter = mail.createTransport({/*

    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,*/
    service: 'Gmail',
    auth: {
        user: 'simple.auth.service@gmail.com',
        pass: 'by.password12'
    }
});

function sendPassword(address, password, onend) {
    const mailOptions = {
        from: 'Authorisation',//'simple.auth.service@gmail.com',
        to: address,//'vovasatunkin@mail.ru',
        subject: 'Dropping password',
        html: `<h3>Password successfully changed</h3> Your new password: ${password}`
    };

    transporter.sendMail(mailOptions, onend);
}

function generatePassword() {
    let res = '';
    for (let i = 0; i < 10; i++)
        res += String.fromCodePoint(Math.round(48 + Math.random() * 74));
    return res;
}

function dropPassword(req, res) {
    const {email} = req.body;
    const newPass = generatePassword();
    const db = new DBProvider();
    db.getUserByOnlyEmail(email,  function(err, row) {
        if(row === undefined)
            res.json({Error: 'Such user has not been found: check email'});
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
