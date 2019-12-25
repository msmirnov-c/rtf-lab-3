const fs = require('fs');
const crypto = require('crypto')

/**
 * Метод принимающий 3 парамметра
 * @param {string} name - имя пользователя
 * @param {string} login - login
 * @param {string} password - пароль
 */

function authentication(req, res) {
  const { login, password } = req.body;
  var hash = crypto.createHash('md5').update(password).digest("hex");

  const DBusers = fs.readFileSync("models/DBusers.txt", "utf8");
  if (!login || !password) {
    res.json({ Success: false });
  } else if (!DBusers.includes(`"login":"${login}", "password":"${hash}"`)) {
    res.json({ Success: false, error: "Логин или пароль неверны" });
  } else {
    res.cookie('login', login, { maxAge: 900000, httpOnly: true });
    res.cookie('secret', hash, { maxAge: 900000, httpOnly: true });
    res.json({ Success: true });
  }
}

function registration(req, res) {
  const { name, login, password, passwordConfirm } = req.body;

  const DBusers = fs.readFileSync("models/DBusers.txt", "utf8");
  if (!name || !login || !password || !passwordConfirm) {
    res.json({ Success: false });
  } else if (password !== passwordConfirm) {
    res.json({
      Success: false,
      error: 'Пароли не совпадают!'
    });
  } else if (!DBusers.includes(`"login":"${login}"`)) {
    var hash = crypto.createHash('md5').update(password).digest("hex");
    fs.appendFileSync('models/DBusers.txt', `"name":"${name}", "login":"${login}", "password":"${hash}"` + '\n');
    res.json({ Success: true });
  } else {
    res.json({
      Success: false,
      error: 'Имя уже занято!'
    });
  }
}
 function logout(req, res){
    res.clearCookie('login');
    res.clearCookie('secret');
    res.redirect("/");
 }

module.exports =  {
    authentication,
    registration, 
    logout
}