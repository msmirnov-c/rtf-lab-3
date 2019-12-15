const MongoClient = require('mongodb').MongoClient;
const { url } = require('../../conifg/db');
const { CheckData } = require('../../processor/settings')

const clearCookies = (res) => {
    res.clearCookie('badlogin');
    res.clearCookie('badpass');
    res.clearCookie('loginexists');
    res.clearCookie('bademail');
}

/**
 * Метод принимающий 7 параметров
 * @param {string} login - логин пользователя
 * @param {string} firstName - имя
 * @param {string} secondName - фамилия
 * @param {string} email - email
 * @param {string} password - пароль
 * @param {string} passwordConfirmation - подтверждение пароля
 * @param {string} about - краткая информация о пользователе
 */

function regUser(req, res, next) {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            res.send(err);
            setTimeout(() => {
                res.redirect('/');
            }, 5000)
        } else {
            const { login, firstName, secondName, email, password, passwordConfirmation, about } = req.body;
            const user = { login, firstName, secondName, email, password, passwordConfirmation, about };

            const db = client.db('UsersDb');

            let checkData = new Promise((resolve, reject) => {
                CheckData(user, db, (report) => {
                    resolve(report);
                })
            });

            checkData
                .then(report => {
                    const isDataCorrect = !report.loginExists &&
                                          !report.emailExists &&
                                          !report.differentPasswords;

                    if (isDataCorrect) {
                        clearCookies(res)
                        delete user.passwordConfirmation;
                        db.collection('users').insert(user, (err, result) => {
                            if (err) {
                                res.send(err);
                                setTimeout(() => {
                                    res.redirect('/');
                                }, 5000)
                            }
                        });
                        res.redirect('/auth');
                    } else {
                        if (report.differentPasswords) {
                            res.cookie('badpass');
                        }

                        if (report.loginExists) {
                            res.cookie('loginexists');
                        }

                        if (report.emailExists) {
                            res.cookie('bademail');
                        }

                        res.redirect('/reg');
                    }
                })
        }
    });
}

module.exports = { regUser }
