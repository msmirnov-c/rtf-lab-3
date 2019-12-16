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
    const content = (id, name, age);
    file_put_contents('file.txt', req.body);
    $f = fopen('/file.txt', 'a+' );
    fwrite($f, "Имя пользователя: ", req.body," \n");
    
   }

module.exports =  {
   register
}
