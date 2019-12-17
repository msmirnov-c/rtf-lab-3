/**
 * Регистрация принимающий 3 парамметра
 * @param {string} email - email
 * @param {string} logname - имя
 * @param {string} password - пароль
 */
function registrate(req, res, next) {
    const {email, logname, password} = req.body;
    if (!email || !logname || !password) {
        res.send({Error: 'NO PARAMS'})
    }
    const fs = require("fs");
    let data = {
        email: email,
        logname: logname,
        password: password
    };
    fs.appendFile("data.txt", JSON.stringify(data)+'\n', function(error){
        if(error) throw error;
        console.log("Запись файла завершена. Содержимое файла:");
        let inf = fs.readFileSync("data.txt", "utf8");
        console.log(inf);
    })
    res.send({Success: true});
}


/**
 * Вход принимающий 3 парамметра
 * @param {string} email - email
 * @param {string} logname - имя
 * @param {string} password - пароль
 */
function authenticate(req, res, next){
    const {email, logname, password} = req.body;
    if (!email || !logname || !password) {
        res.send({Error: 'NO Enter'})
    }
    const fs = require("fs");
    fs.readFile("data.txt", "utf8", function(error, data){
        if(error) throw error;
        let mas = data.split("\n");
        mas.forEach(element => {
            let inf = JSON.parse(element);
            console.log(inf);
            console.log(email, logname, password);
            if(logname == inf.logname)
            {
                console.log("Очень рад вас видеть, " + inf.logname);
                return res.send({Success: true});
            }
        });
        return res.send({Success: false});
    }) 
}

module.exports =  {
    registrate,
    authenticate
};