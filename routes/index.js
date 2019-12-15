let express = require('express');
let router = express.Router();
const {authUser, registerUser} = require('../workers/auth/index');
console.log(authUser);
/* GET home page. */
router.post('/auth', authUser);

router.post('/register', registerUser);

module.exports = router;
