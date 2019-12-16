var bodyParser = require('body-parser');
var router = require('express').Router();

router.use(bodyParser.json());

router.use(require('./user'));
router.use(require('./login'));
router.use(require('./account'));

module.exports = router;
var db = require('./db');
var user = db.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true, select: false}
});

module.exports = db.model('User', user);