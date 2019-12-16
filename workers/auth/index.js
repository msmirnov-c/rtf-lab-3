const fs = require('fs');

/**
 * Метод принимающий 2 парамметра
 * @param {string} login - логин
 * @param {number} password - пароль
 */
function auth(req, res, next) {
    const {login, password} = req.body;

    console.log(login, password);

    const usersData = fs.readFileSync("users.txt", "utf8");
    if (usersData.includes(`"login":"${login}","password":"${password}"`)){
        res.redirect('/public/index.html');
    } else {
        res.json({Success: false})
    }
    res.redirect('/public/index.html');
}


/**
 * Метод, принимающий 3 парамметра
 * @param {string} login - логин
 * @param {string} email - почта
 * @param {number} password - пароль
 */
function register(req, res, next) {
    const {login, email, password} = req.body;

    console.log(login, email, password);
    /*res.json({Success: true})*/


    const usersData = fs.readFileSync("users.txt", "utf8");
    if (usersData.includes(`"login":"${login}"`)) {
        res.json({Error: 'Такой логин уже существует. Придумайте новый'});
    } else {
        fs.appendFileSync('users.txt', ` "login":"${login}","password":"${password}","email":"${email}"` + '\n');
        res.redirect('/public/index.html');
    }    
}

module.exports = {
    auth,
    register
};