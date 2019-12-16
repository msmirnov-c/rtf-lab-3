/**
 * Метод принимающий 2 парамметра
 * @param {string} name - имя пользователя
 * @param {string} password - имя
 */
function postExample(req, res, next) {
    const {name, password} = req.body;
    if (!name || !password ) {
        res.send({Error: 'NO PARAMS'})
        throw error;
    }
    console.log(name, password);
    //res.json({Success: true})
    const fs = require("fs");
    let content = {
        Username: name,
        Password: password,
        };
        console.log(content);

    fs.appendFile("Reg.txt", JSON.stringify(content), function(error){
        if(error) throw error; // если возникла ошибка
        console.log("Запись файла завершена. Содержимое файла:");
        let data = fs.readFileSync("Reg.txt", "utf8");
        console.log(data);
        return res.json({Success: true});
     });
    }

module.exports = {postExample}