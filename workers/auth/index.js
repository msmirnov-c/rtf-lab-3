const bcrypt =  require('bcryptjs');
/**
 * Метод принимающий 2 парамметра
 * @param {string} login - логин пользователя
 * @param {string} password - пароль
 */
function auth(req, res, next) {
    const { login, password } = req.body;
    if ( !login || !password) { 
        return res.send({Error: 'WTF???'})
    }
    const fs = require("fs"); 
    fs.readFile("Users.txt", "utf8",function(error, information) {
                console.log("Чтение секретного документа");
                if(error) throw error;
                console.log(information);
                let content = JSON.parse(information); 
                console.log("Парсинг ...");
                if (login === content.login) {
                    bcrypt.compare(password, content.hash, function(error, result){
                        console.log("Сравнение ...");
                        console.log(result);
                        if (result === true){
                        console.log ("You are welcome! ", content.Username);
                        return res.json({Success: true})
                        }
                        else return res.json({Success: false});    
                    });
                } 
                else return res.json({Success: false});    
            });   
}
module.exports =  {
    auth
}