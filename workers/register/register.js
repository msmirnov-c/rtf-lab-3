/**
 * Метод принимающий 2 парамметра
 * @param {string} name - имя
 * @param {string} email - возраст
 */

function register(req, res, next) {
     const {name, email } = req.body;
     if (!name || !email) {
        return res.send({Error: 'NO PARAMS'})
     }
     //console.log(name, email);
     const content = new Array(name, email);
     const fs = require("fs");
     fs.writeFile("file.txt", JSON.stringify(content), function(error){
     if(error) throw error; // если возникла ошибка
     console.log("Асинхронная запись файла завершена. Содержимое файла:");
     let data = fs.readFileSync("file.txt", "utf8");
     console.log(data);
     return res.json({Success: true});
     //const content = new Array(name, email);
    });
    }
 
 module.exports =  {
    register
}