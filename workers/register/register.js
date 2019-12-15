const bcrypt =  require('bcryptjs')
/**
 * Метод принимающий 2 парамметра
 * @param {string} name - имя
 * @param {string} email - возраст
 * @param {string} password - пароль
 */

function register(req, res, next) {
     const {name, email, password } = req.body;
     if (!name || !email || !password) {
        return res.send({Error: 'NO PARAMS'})
     }
     //console.log(name, email);
    /* 
     Тут будем хешировать...
     */
     
        // Store hash in database
      
    





     
     const fs = require("fs");
     const content = new Array(name, email, bcrypt.hash( password, 10, function( err, hash ){
        return hash
     }));
     fs.writeFile("file.txt", JSON.stringify(content), function(error){
     if(error) throw error; // если возникла ошибка
     console.log("Асинхронная запись файла завершена. Содержимое файла:");
     let data = fs.readFileSync("file.txt", "utf8");
     console.log(data);


     return res.json({Success: true});
     
    });
}
 

 module.exports =  {
    register
}