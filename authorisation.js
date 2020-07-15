const DBProvider = require("./dbprovider");
const User = require("./model/user");
/**
 * Метод принимающий в теле запроса 3 парамметра
 * @param {string} email - почта
 * @param {string} nick - ник
 * @param {string} pass - пароль
 */
function getUser(req, res, next) {
    const {email, nick, pass} = req.body;
    const db = new DBProvider();
    console.log(email, nick, pass);
    if ((!email && !nick) || !pass)
        res.send({Error: 'Не все поля получены'});
    if(email)
        db.getUserByEmail(email, pass, function(err, row) {
            if(row === undefined)
                res.json({Error: 'Пользователь с такими данными не найден проверьте e-mail/ник и пароль'});
            else
                res.json({email: row.email, nick: row.nick});
        });
    if(nick)
        db.getUserByNick(nick, pass, function(err, row) {
            if(row === undefined)
                res.json({Error: 'Пользователь с такими данными не найден проверьте e-mail/ник и пароль'});
            else
                res.json({email: row.email, nick: row.nick});
        });
    db.close();
}

/**
 * Метод принимающий в теле запроса 5 парамметров
 * @param {string} oldEmail - старая почта
 * @param {string} newEmail - новая почта
 * @param {string} pass - пароль
 * @param {string} newPass - новый пароль
 * @param {string} newNick - новый ник
 */
async function changeUser(req, res)
{
    const {oldEmail, pass, newEmail, newNick, newPass } = req.body;
    if (!oldEmail|| !pass)
        res.send({Error: 'Не все поля получены'});
    const db = new DBProvider();
    await db.getUserByEmail(oldEmail, pass,  async function(err, row) {
        if(row === undefined)
            res.json({Error: 'Пользователь с такими данными не найден проверьте e-mail/ник и пароль'});
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
/**
 * Метод принимающий в теле запроса 3 парамметра
 * @param {string} email - почта
 * @param {string} nick - ник
 * @param {string} pass - пароль
 */
function addNewUser(req, res, next) {
    const {email, nick, pass} = req.body;
    if (!email || !nick || !pass) {
        res.send({Error: 'Не все поля получены'});
        return;
    }
    const db = new DBProvider();
    db.addUser(new User(email, nick, pass), (err)=>{
        if(err) {
            const tokens = err.message.split(' ');
            res.json({Error: err.code === 'SQLITE_CONSTRAINT' ? `Пользователь с таким ${tokens[tokens.length - 1].split('.')[1]} уже существует` : err});
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
}

module.exports = {getUser, addNewUser, changeUser};
