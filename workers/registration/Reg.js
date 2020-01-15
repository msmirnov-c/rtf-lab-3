const bcrypt =  require('bcryptjs')
/**
 * Метод принимающий 2 парамметра
 * @param {string} login - логин пользователя
 * @param {string} password - пароль
 */

function registration(req, res, next) {
     const {login, password } = req.body;
     if (!login || !password) {
        return res.send({Error: 'NO PARAMS'})
    }
   
    var sol = bcrypt.genSaltSync(10); //https://wcoder.github.io/notes/nodejs-bcrypt
    var passwordToSave = bcrypt.hashSync(password, sol); //хэширование
    const fs = require("fs");
    let content ={ 
        login: login, 
        hash: passwordToSave
    };
    fs.writeFile("Users.txt", JSON.stringify(content)+'\n', function(error){
        if(error) throw error;
        console.log("Запись в файл успешна");
        let information = fs.readFileSync("Users.txt", "utf8");
        console.log(information);
        return res.json({Success: true});
    });
}
 module.exports =  {
    registration
}