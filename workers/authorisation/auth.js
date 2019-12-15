const bcrypt =  require('bcryptjs');


/**
 * Метод принимающий 2 парамметра
 * @param {string} email - мыло
 * @param {string} password - пароль
 */
function authorisation(req, res, next) {
    const { email, password } = req.body;
    if ( !email || !password) { 
        return res.send({Error: 'LOL'})
    }

    const fs = require("fs");
    
    fs.readFile("file.txt", "utf8",function(error,data) {
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
                let content = JSON.parse(data); 
                console.log("Парсинг ...");
                if (email === content.email) {
                    bcrypt.compare(password, content.hash, function(error, result){
                        console.log("Сравнение ...");
                        console.log(result);
                        if (result === true){
                        console.log ("Добро пожаловать ", content.Username );
                        return res.json({Success: true})
                        }
                        else return res.json({Success: false});    
                    });
                } 
                else return res.json({Success: false});    
            });   
}


module.exports =  {
    authorisation
}