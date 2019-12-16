
const fs = require('fs');
function authUser(req, res, next) {
    
    const data = fs.readFileSync('Data.txt', 'utf8').split(' ');
    
    const {name, pass} = req.body;
    for(let i = 0; i < data.length; i+=2)
    {
        if(name==data[i] && pass==data[i+1])
        {
            res.json({userAuth:'Вы зашли!'})
        }
    }
    res.json({Error: 'Не верный логин или пароль.'})
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} name - имя
 * @param {password} pass - пароль
 */
function postExample(req, res, next) {
    
    const {name, pass} = req.body;
    
    if (name == "" || /[^a-zA-z]/.test(name))
        res.json({Error: 'Ошибка имени (только латинские буквы)'});

    if (pass == "" || /[^0-9]/.test(pass))
        res.json({Error: 'Ошибка пароля (только цифры)'});

    fs.appendFile('Data.txt', name + ' ' + pass + ' ', () => {});
    res.json({Sucsess: name});
}


module.exports =  {
    authUser,
    postExample
}