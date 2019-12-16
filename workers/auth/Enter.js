/**
 * Метод принимающий 2 парамметра
 * @param {string} name - имя пользователя
 * @param {string} password - имя
 */
function Enter1(req, res, next) {
    const { name, password } = req.body;
    if ( !name || !password) { 
        return res.send({Error: 'KEKW'})
    }

    const fs = require("fs");
    
    fs.readFile("Reg.txt", "utf8",function(error,data) {
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
                let content = JSON.parse(data);    
                console.log(content);
                if (name === content.Username) {
                    console.log("Проверка ...");

                    if(password===content.Password){
                            return res.send({Success: true})
                            }
                            else return res.send({Success: false}); 
                    } 
                else return res.send({Success: false});  
            });   
}

module.exports = {Enter1}