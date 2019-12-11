const DBProvider = require("./dbprovider");
const User = require("./model/user");

function getUser(req, res, next) {
    const {email, nick, pass} = req.body;
    const db = new DBProvider();
    console.log(email, nick, pass);
    if ((!email && !nick) || !pass)
        res.send({Error: 'Not all fields are received'});
    if(email)
        db.getUserByEmail(email, pass, function(err, row) {
            if(row === undefined)
                res.json({Error: 'Such user has not been found: check email or nick and password'});
            else
                res.json({email: row.email, nick: row.nick});
        });
    if(nick)
        db.getUserByNick(nick, pass, function(err, row) {
            if(row === undefined)
                res.json({Error: 'Such user has not been found: check email or nick and password'});
            else
                res.json({email: row.email, nick: row.nick});
        });
    db.close();
}

function editUser(req, res) {
    const {email} = req.body;
    const db = new DBProvider();
    console.log(email);
    if(email)
        db.getUserByOnlyEmail(email,function(err, row) {
            if(row === undefined)
                res.json({Error: 'Such user has not been found: check email or nick and password'});
            else
                res.render('edit', {email: row.email, nick: row.nick});
        });
    else
        res.send({Error: 'Not all fields are received'});
    db.close();
    //res.render('edit.hbs', {nick: "my nick", email: 'AS@qASD'})
}

async function changeUser(req, res)
{
    const {oldEmail, pass, newEmail, newNick, newPass } = req.body;
    if (!oldEmail|| !pass)
        res.send({Error: 'Not all fields are received'});
    const db = new DBProvider();
    await db.getUserByEmail(oldEmail, pass,  async function(err, row) {
        if(row === undefined)
            res.json({Error: 'Such user has not been found: check email or nick and password'});
        else {
            const newUserData = new User(newEmail ? newEmail : oldEmail, newNick ? newNick : row.nick, newPass !== "" ? newPass : row.pass);
            await db.changeUser(oldEmail , newUserData, err => {
                //newUserData.pass = undefined;
                res.json(newUserData);
                //res.location('/');
            });
        }
    });
    db.close();
}

function addNewUser(req, res, next) {
    const {email, nick, pass} = req.body;
    if (!email || !nick || !pass) {
        res.send({Error: 'not all fields received'});
        return;
    }
    const db = new DBProvider();
    db.addUser(new User(email, nick, pass), (err)=>{
        if(err) {
            const tokens = err.message.split(' ');
            res.json({Error: err.code === 'SQLITE_CONSTRAINT' ? `User with such ${tokens[tokens.length - 1].split('.')[1]} already exists` : err});
        }
        else
            db.getUserByEmail(email, pass, function(err, row) {
                if(err)
                    res.json({Error: err});
                else
                    res.json({email: row.email, nick: row.nick});
                db.close();
            });
    });
    //res.send('Ok');
}

module.exports = {getUser, addNewUser, changeUser, editUser};
