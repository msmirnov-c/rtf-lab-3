const path = require('path');

const mainPage = (req, res, next) => {
    if (req.session.user !== undefined) {
        res.cookie('login', req.session.user.login);
    } else {
        res.clearCookie('loginexists');
        res.clearCookie('badlogin');
        res.clearCookie('bademail');
        res.clearCookie('badpass');
        res.clearCookie('login');
    }
    res.sendFile(path.resolve('views/main.html'))
}

const authPage = (req, res, next) => {
    if (req.session.user !== undefined) {
        res.redirect('/');
    } else {
        res.sendFile(path.resolve('views/auth.html'));
    }
}

const regPage = (req, res, next) => {
    if (req.session.user !== undefined) {
        res.redirect('/');
    } else {
        res.sendFile(path.resolve('views/reg.html'));
    }
}

module.exports = { mainPage, authPage, regPage };