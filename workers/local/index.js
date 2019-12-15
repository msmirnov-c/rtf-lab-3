const path = require('path');

const mainPage = (req, res, next) => {
    if (req.session.user !== undefined) {
        res.cookie('login', req.session.user.login);
        res.cookie('firstName', req.session.user.firstName);
        res.cookie('secondName', req.session.user.secondName);
        res.cookie('email', req.session.user.email);
        res.cookie('about', req.session.user.about);
    } else {
        res.clearCookie('loginexists');
        res.clearCookie('badlogin');
        res.clearCookie('bademail');
        res.clearCookie('badpass');
        res.clearCookie('login');
        res.clearCookie('firstName');
        res.clearCookie('secondName');
        res.clearCookie('email');
        res.clearCookie('about');
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