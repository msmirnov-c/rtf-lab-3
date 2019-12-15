function authUser(req, res, next) {
    console.log('authuser');
    console.log(req);
    res.json({userAuth: true})
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */
function regUser(req, res, next) {
    const {id, name, age} = req.body;
    if (!id || !name || !age) {
        res.send({Error: 'NO PARAMS'})
    }
    console.log(id, age, name);
    res.json({Success: true})
}

module.exports =  {
    authUser,
    regUser
}
