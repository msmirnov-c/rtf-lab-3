/**
 * Метод принимающий 3 парамметра
 * @param {string} id  - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */

function register(req, res, next) {
     const {id, name, age } = req.body;
     if (!id || !name || !age) {
         res.send({Error: 'NO PARAMS'})
     }
     console.log(id, age, name);
     res.json({Success: true});
     
     //file_put_contents('file.txt', json_encode($_POST));
     //$f = fopen('file.txt', 'a+' );
     //fwrite($f, "Имя пользователя: ", $name," \n");
     
    }
 
 module.exports =  {
    register
}