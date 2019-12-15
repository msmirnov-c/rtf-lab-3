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
    var salt = bcrypt.genSaltSync(10);
    var passwordToSave = bcrypt.hashSync(password, salt);


     const fs = require("fs");

     let content ={
      Username: name,
      email: email,
      hash: passwordToSave,
      salt: salt
      };
      
     //const content = new Array(name, email, passwordToSave, salt);
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