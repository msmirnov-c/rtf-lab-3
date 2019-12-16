/**
 * Метод принимающий 3 парамметра
 * @param {string} login  - айди пользователя
 * @param {string} name - имя
 * @param {number} password - возраст
 */

function authUser(req, res, next) {
    const {login, password} = req.body;
    if (!login || !password) {
        res.send({Error: 'Некоторые поля незаполнены'});
    }

}

function postExample(req, res, next) {
    const {login, name, password} = req.body;
    if (!login || !name || !password) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(login, name, password);
    require('fs').appendFile(require('path').resolve('file.txt'), name + ' ' + pass+'\n', () => {});
    res.json({Success: true})
    //file_put_contents('file.txt', req.body);

}

module.exports =  {
    authUser,
    postExample
}
