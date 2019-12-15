const User = require("./model/users");

function authUser(req, res, next) {
    console.log('autuser');
    console.log(req);
    res.json({userAuth: true})
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} login - айди пользователя
 * @param {string} name - имя
 * @param {number} password - возраст
 */
function postExample(req, res, next) {
    const {login, name, password} = req.body;
    if (!login || !name || !password) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(name);
    res.json({Success: true})
}

async function acyncFyn() {
    await setTimeout(() => {}, 10000)
    return true;
}

module.exports =  {
    authUser,
    postExample
}

/**
 * Метод принимающий в теле запроса 3 парамметра
 * @param {string} login - почта
 * @param {string} name - ник
 * @param {string} password - пароль
 */
function addNewUser(req, res, next) {
    const {login, name, password} = req.body;
    if (!login || !name || !password) {
        res.send({Error: 'Не все поля получены'});
        return;
    }
    const db = new DBProvider();
    db.addUser(new User(login, name, password), (err)=>{
        if(err) {
            const tokens = err.message.split(' ');
            res.json({Error: err.code === 'SQLITE_CONSTRAINT' ? `Пользователь с таким ${tokens[tokens.length - 1].split('.')[1]} уже существует` : err});
        }
        else
            db.getUserByEmail(login, password, function(err, row) {
                if(err)
                    res.json({Error: err});
                else
                    res.json({login: row.login, name: row.name});
                db.close();
            });
    });
}

module.exports = {addNewUser};