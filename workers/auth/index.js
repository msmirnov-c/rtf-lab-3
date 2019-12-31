
const fs = require('fs');


function authUser(req, res, next) {
    
    const data = fs.readFileSync('Data.txt', 'utf8').split(' ');
    
    const {name, pass} = req.body;
    for(let i = 0; i < data.length; i+=2)
    {
        if(name==data[i] && pass==data[i+1])
        {
            res.redirect('/success.html');
        }
    }
    res.redirect('/error.html');
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} name - имя
 * @param {password} pass - пароль
 */
function postExample(req, res, next) {
    
    const {name, pass} = req.body;
    
    if (name == "" || /[^a-zA-z]/.test(name))
        res.redirect('/error.html');

    if (pass == "" || /[^a-zA-Z0-9]/.test(pass))
        res.redirect('/error.html');

    fs.appendFile('Data.txt', name + ' ' + pass + ' ', (error) => { if (error) throw error;});
    res.redirect('/success.html');
}


module.exports =  {
    authUser,
    postExample
}