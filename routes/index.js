const express =  require('express');
const router = express.Router();
const path = require('path');
const {login, registration} = require('../workers/auth/index')

router.use(express.static('public'));
router.get('/', (request, response) => {
	response.sendFile(path.resolve ('public/index.html'))
});

router.get('/registration', (request, response) => {
	response.sendFile(path.resolve ('public/registration.html'))
});

router.get('/login', (request, response) => {
	response.sendFile(path.resolve ('public/login.html'))
});

router.post('/registration', registration);
router.post('/login', login);

module.exports = router;
