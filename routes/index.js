const { authUser, registerUser } = require('../workers/auth/index');
//const { registerUser,  } = require('../workers/reg/index.js');
var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.post('/authorization', authUser);
router.get('/auth', regUser);
router.get('/reg', authUser);

//router.post('/reg', registerUser);

const authUser = (req, res, next) => {
        res.sendFile(path.resolve('../workers/auth/authorization.html'));
    }
}

const regUser = (req, res, next) => {
    if (req.session.user !== undefined) {
        res.redirect('/');
    } else {
        res.sendFile(path.resolve('workers/reg/reg.html'));
    }
}

module.exports = { authUser, regUser };
