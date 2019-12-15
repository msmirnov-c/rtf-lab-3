const { authUser, postExample, postExists } = require('../workers/auth/index.js');
let express = require('express');
let router = express.Router();
let path = require('path');
let localStorage = require('../public/javascripts/authorisation');

/* GET home page. */
router.post('/postNewUser', postExample);
router.post('/postExistsUser', postExists);
router.get('/auth', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/authorisation.html')); //Делаем так, чтобы отображалось не как .html
});
router.get('/join', function(req, res, next) {
            res.sendFile(path.join(__dirname, '../public/registration.html'));
});

module.exports = router;

