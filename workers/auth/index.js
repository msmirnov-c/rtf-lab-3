const fs = require('fs');
const DBusers = fs.readFileSync("models/DBusers.txt", "utf8");

/**
 * Метод принимающий 3 парамметра
 * @param {string} name - имя пользователя
 * @param {string} login - login
 * @param {string} password - пароль
 */

function authentication(req, res) {
  const { login, password } = req.body;

  if (!login || !password) {
    res.json({ Success: false });
  } else if (!DBusers.includes(`"login":"${login}", "password":"${password}"`)) {
    res.json({ Success: false, error: "Логин или пароль неверны" });
  } else {
    res.json({ Success: true });
  }
}

function registration(req, res) {
  const { name, login, password, passwordConfirm } = req.body;

  if (!name || !login || !password || !passwordConfirm) {
    res.json({ Success: false });
  } else if (password !== passwordConfirm) {
    res.json({
      Success: false,
      error: 'Пароли не совпадают!'
    });
  } else if (!DBusers.includes(`"login":"${login}"`)) {
    fs.appendFileSync('models/DBusers.txt', `"name":"${name}", "login":"${login}", "password":"${password}"` + '\n');
    res.json({ Success: true });
  } else {
    res.json({
      Success: false,
      error: 'Имя уже занято!'
    });
  }
}

module.exports =  {
    authUser: authentication,
    postExample: registration
}