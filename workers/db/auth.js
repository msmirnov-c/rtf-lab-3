const MongoClient = require('mongodb').MongoClient;
const { url } = require('../../conifg/db');
const { CheckUser } = require('../../processor/settings')

/**
 * Метод принимающий 2 парамметра
 * @param {string} login - логин
 * @param {number} password - пароль
 */
function logInUser(req, res, next) {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            res.send(err);
            setTimeout(() => {
                res.redirect('/');
            }, 5000)
        } else {
            const { login, password } = req.body;
            const user = { login, password };

            const db = client.db('UsersDb');

            CheckUser(user, db, (result) => {
                if (result === null) {
                    res.cookie('badlogin', user.login);
                    res.redirect('/auth');
                } else {
                    res.clearCookie('badlogin');
                    const user = result;
                    req.session.user = {
                        login: user.login,
                        firstName: user.firstName,
                        secondName: user.secondName,
                        email: user.email,
                        about: user.about
                    }
                    res.redirect('/');
                }
            })
        }
    })
}

function logOutUser(req, res, next) {
    if (req.session.user) {
        delete req.session.user;
    }
    res.redirect('/')
}

module.exports = { logInUser, logOutUser };