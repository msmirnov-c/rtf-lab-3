/**
 * Метод принимающий 3 парамметра
 * @param {string} login  - айди пользователя
 * @param {string} name - имя
 * @param {number} password - возраст
 */

function authUser(req, res, next) {
    const {login, password} = req.body;
    if (!login || !password) {
        res.send({Error: 'Некоторые поля незаполненны'});
    }

    let fo = require('fs').readFileSync(require('path').resolve('file.txt'), 'utf8');
    let name_pass = {};
    var names = new Array();
    var passes = new Array();
    console.log('Количество зарегестрированных', fo.split('\n').length-1);
    for(let x = 0; x < fo.split('\n').length-1; x++)
    {
        names.push(fo.split('\n')[x].split(' ')[0]);
        passes.push(fo.split('\n')[x].split(' ')[1]);
    }

    for (let x = 0; x < fo.split('\n').length-1; x++){
        name_pass[names[x]] = passes[x];
    }
    if (name_pass[login] === pass){
        res.json({Success: true});
    } else {
        res.json({Error: 'Такого пользователя не существует, проверьте правильность ввода'});
    }
    res.json({Error: 'Ввели неверные данные, проверьте имя/пароль'});
}

function postExample(req, res, next) {
    const {login, name, password} = req.body;
    if (!login || !name || !password) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(login, name, password);
    res.json({Success: true})
    file_put_contents('file.txt', req.body);

}

module.exports =  {
    authUser,
    postExample
}
