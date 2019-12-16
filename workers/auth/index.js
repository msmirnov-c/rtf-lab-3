/**
 * Метод принимающий 3 парамметра
 * @param {string} name - имя
 * @param {number} pass - возраст
 */
const file = require('fs');
const path = require('path');
function authUser(req, res, next) {
    const {name, pass} = req.body;
    if (!name || !pass) {
        res.send({Error: 'Некоторые поля незаполненны, заполните Имя/Пароль'});
    }

    let fo = file.readFileSync(path.resolve('DB.txt'), 'utf8');
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
    if (name_pass[name] === pass){
        res.json({Success: true});
    } else {
        res.json({Error: 'Такого пользователя не существует, проверьте правильность ввода'});
    }
    res.json({Error: 'Ввели неверные данные, проверьте имя/пароль'});
}

function postExample(req, res, next) {
    const {name, pass} = req.body;
    if (!name || !pass) {
        res.send({Error: 'Некоторые поля остались незаполненными, заполните Имя/Пароль'});
    }
    file.appendFile(path.resolve('DB.txt'), name + ' ' + pass+'\n', () => {});
    
    res.json({Success: true});
}

module.exports =  {
    authUser,
    postExample
}