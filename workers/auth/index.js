
const DbClient = require('../../database/DbClient');

async function authUser(req, res, next) {
    console.log('autuser');
    console.log(req);
    const db = new DbClient();
    let strings = db.GetAllUsers();
    res.json({strings});
}

/**
* Метод принимающий 3 парамметра
* @param {string} nick- ник
* @param {string} email - почта
* @param {string} pass - пароль
*/
async function postExample(req, res, next) {
    const {email, nick, pass} = req.body;
    if (!email || !nick || !pass) {
        res.send({Error: 'NO PARAMS'});
    }
    const db = new DbClient();
    await db.AddUser(email, nick, pass, async function (err, row) { // Добавляем в базу данных нового пользователя
        if (err) {
            res.status(500).send('Пользователь с таким логином или почтой уже зарегистрирован!');
            console.log(err);
            throw err
        }
    });
    if (res.status !== 500) {
        console.log(email, nick, pass);
        res.send("Success");
    }
    db.close();
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function postExists(req, res, next){
    const {identifier, pass} = req.body;
    if (!identifier || !pass ) {
        res.send({Error: 'NO PARAMS'});
    }
    const db = new DbClient();
    await db.CheckUserAuth(identifier, pass, async function (err, row) { //Проверяем в бд есть ли пользователь
        if (row === undefined) {
            res.status(500).send('Неправильный логин или пароль.');
        } else {
            res.send("Success");
        }
    });
    console.log(identifier, pass);
    db.close();
}
module.exports =  {
    authUser,
    postExample,
    postExists
}
