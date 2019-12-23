const fs = require('fs');

/**
 * Метод принимающий 2 парамметра
 * @param {string} login - логин
 * @param {string} password - пароль
 */
function auth(req, res, next) {
    const {login, password} = req.body;

    console.log(login, password);

    const usersData = fs.readFileSync("users.txt", "utf8");
    if (usersData.includes(`"login":"${login}","password":"${password}"`)){
        res.redirect('/public/index.html');
    } else {
        res.json({Error: 'Такого пользователя нет в базе. Может введены неверные данные'});
    }
}

/**
 * Метод, принимающий 3 парамметра
 * @param {string} login - логин
 * @param {string} email - почта
 * @param {string} password - пароль
 */
function register(req, res, next) {
    const {login, email, password} = req.body;
    console.log(login, email, password);

    const usersData = fs.readFileSync("users.txt", "utf8");
    if (!usersData.includes(`"login":"${login}"`)) {
        fs.appendFileSync('users.txt', ` "login":"${login}","password":"${password}","email":"${email}"` + '\n');
        res.redirect('/public/index.html');
    } else {
        res.json('Такой логин уже существует.');
    }
}

module.exports = {
    auth,
    register
};