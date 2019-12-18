/**
 * Метод принимающий 2 параметра
 * @param {string} name - имя
 * @param {number} pass - пароль
 */
const file = require('fs');
const path = require('path');
function authUser(req, res, next) {
    const {name, pass} = req.body;
    if (!name || !pass) {
        res.redirect('/Error2.html');
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
        res.redirect('/successAuth.html'); // Вывод этого сообщения значит успешную авторизацию
    } else {
        res.redirect('/Error.html');
    }
}

function postExample(req, res, next) {
    const {name, pass} = req.body;
    if (!name || !pass) {
        res.redirect('/Error2.html');
    }
    file.appendFile(path.resolve('DB.txt'), name + ' ' + pass+'\n', () => {});
    
    res.redirect('/successReg.html'); // Вывод этого сообщения значит успешную регистрацию
}

module.exports =  {
    authUser,
    postExample
}