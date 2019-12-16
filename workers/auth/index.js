const fs = require('fs');
const path = require('path');

function getUsers() {
    let users = {};
    let file = fs.readFileSync(path.resolve('auth.txt'), 'utf8');

    let lines = file.split('\n');
    for (let i = 0; i < lines.length; i++){
        let row = lines[i].split(':', 2);
        users[row[0]] = row[1];
    }
    console.log(users);
    return users
}

function signInUser(req, res, next) {
    let users = getUsers();

    if (users[req.body.username] === req.body.password){
        res.redirect('/status');
    } else {
        res.redirect('/wrong');
    }
}

function signUpUser(req, res, next) {
    let users = getUsers();
    console.log(users[req.body.username]);
    if (users[req.body.username]){
        res.redirect('/exists');
        return
    }
    fs.appendFile(path.resolve('auth.txt'), req.body.username + ':' + req.body.password + '\n', (err) => {
        if(err) {
            res.json({success: false});
            return
        }
        res.redirect('/login');
    });

}

module.exports = {signInUser, signUpUser};