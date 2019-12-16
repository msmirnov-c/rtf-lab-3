const fs = require('fs');
const path = require('path');

function authUser(req, res, next) {
    let user = getUser();

    if (user[req.body.username] === req.body.password) {
        res.json({login: req.body.username, success: true});
    } else {
        res.json({error: "This login doesn't exist", success: false});
    }
}

function registerUser(req, res, next) {
    let user = getUser();

    if (user[req.body.username]){
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

function getUser() {
    let file = fs.readFileSync(path.resolve('auth.txt'), 'utf8');
    let line = file.split('\n');

    let user = {};
    for (let i = 0; i < line.length; i++) {
        let user = line[i].split(':');
        user[user[0]] = user[1];
    }

    return user;
}

module.exports = {authUser, registerUser};


