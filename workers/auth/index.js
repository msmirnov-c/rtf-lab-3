const fs = require('fs');
const path = require('path');


function login(req, res, next) {
    let users = info();	
    if (users[req.body.mail] === req.body.password){
        res.redirect('/');
    } else {
        res.json("Ошибка");
    }
    
}


function info() {
    let file = fs.readFileSync(path.resolve('users.txt'), 'utf8');
    let lines = file.split('\n');
    let users = {};
    for (let i = 0; i < lines.length; i++){
        let user = lines[i].split(':');
        users[user[0]] = user[1];
    }

    return users
}

function registration(req, res, next) {
    let users = info();
    if (users[req.body.mail]){
        res.json('Такой пользователь уже существует');
        return
    }

    fs.appendFile(path.resolve('users.txt'), req.body.mail + ':' + req.body.password + '\n', (err) => {
        if(err) {
            res.redirect('/registration.html');
            return
        }
        res.redirect('/');
    });
}

module.exports = {login, registration};