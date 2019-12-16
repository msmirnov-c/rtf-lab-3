/**
 * Метод принимающий 3 парамметра
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
        Login: logname,
        password: password
    }
    fs.appendFile("data.txt", JSON.stringify(data)+'\n', function(error){
        if(error) throw error;
        console.log("Запись файла завершена. Содержимое файла:");
        let inf = fs.readFileSync("data.txt", "utf8");
        console.log(inf);
    })
    res.send({Success: true});
}


module.exports =  {
    registrate
};