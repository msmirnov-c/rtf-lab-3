const fs = require('fs');
var path = require('path');

function authUser(req, res, next) {
    const {name} = req.body;
    let html = fs.readFileSync('/public/index.html','utf8');
    let nhtml = html.slice(0, html.indexOf('<aside>') + '<aside>'.length + 1);
    nhtml = nhtml + `<h2>Привет, ${name}</h2>` + html.slice(html.indexOf('<aside>') + '<aside>'.length + 1);
    fs.writeFileSync('/public/auth.html', nhtml);
    res.json({userAuth: true})
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */
function postExample(req, res, next) {
    const {name, password, age} = req.body;
    if (!name || !password || !age) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(name, age, password);
    const usersData = fs.readFileSync("users.txt", "utf8");
    if (usersData.includes(`|${name},`)) {
        res.redirect('/error');
        res.json({Error: 'User already exists!'});
    } else {
        fs.appendFileSync('users.txt', `|${name}, ${password}, ${age}|`);
        res.redirect('/auth');
    }
}

module.exports = {
    authUser,
    postExample
}