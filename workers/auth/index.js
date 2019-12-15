const fs = require('fs');
const path = require('path');


function authUser(req, res, next) {
    let users = getUsers();

    if (users[req.body.username] === req.body.password){
        res.json({login: req.body.username, success: true});
    } else {
        res.json({error: "This login doesn't exist", success: false});
    }
}


function getUsers() {
    let file = fs.readFileSync(path.resolve('auth.txt'), 'utf8');
    let lines = file.split('\n');

    let users = {};
    for (let i = 0; i < lines.length; i++){
        let user = lines[i].split(':');
        users[user[0]] = user[1];
    }

    return users
}

function registerUser(req, res, next) {
    let users = getUsers();

    if (users[req.body.username]){
        res.json({success: false, err: 'User already exists'});
        return
    }

    fs.appendFile(path.resolve('auth.txt'), req.body.username + ':' + req.body.password + '\n', (err) => {
        if(err) {
            res.json({success: false});
            return
        }
        res.json({success: true})
    });
}

module.exports = {authUser, registerUser};