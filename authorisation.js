const DBProvider = require("./dbprovider");

function getUser(req, res, next) {
    const {email, nick, pass} = req.body;
    const db = new DBProvider();
    console.log(email, nick, pass);
    if ((!email && !nick) || !pass)
        res.send({Error: 'NO PARAMS'});
    if(email)
        db.getUserByEmail(email, pass, function(err, row) {
            res.json({email: row.email, nick: row.nick});
        });
    if(nick)
        db.getUserByNick(nick, pass, function(err, row) {
            res.json({email: row.email, nick: row.nick});
        });
    db.close();
}

async function addNewUser(req, res, next) {
    const {email, nick, pass} = req.body;
    if (!email || !nick || !pass) {
        res.send({Error: 'NO PARAMS'});
        return;
    }
    const db = new DBProvider();
    await db.addUser(new User(email, nick, pass));
    await db.getUserByEmail(email, pass, function(err, row) {
        res.json({email: row.email, nick: row.nick});
    });
    db.close();
    //res.send('Ok');
}

module.exports = {getUser, addNewUser}
