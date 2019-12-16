const bcrypt = require('bcrypt-nodejs');

const models = require('../models');

function authUser(req, res, next) {
    console.log('autuser');
    console.log(req.params.id);
    res.json({userAuth: true})
}

/**
 * Метод принимающий 3 парамметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */
function postExample(req, res, next) {
    console.log(req.body)
    // const {id, name, age} = req.body;
    const name = req.body.login;
    const id = req.body.id;
    const age = req.body.age;
    const idConfirm = req.body.idConfirm;
    if (!id || !name || !age) {
        res.json({
            ok: false,
            error: 'Пустые поля недопустимы!',
            fields: ['name', 'id', 'age']
          });
    } else if (id !== idConfirm) {
        res.json({
          ok: false,
          error: 'Пароли не совпадают!',
          fields: ['id', 'idConfirm']
        });
    }else {
        models.User.findOne({
          name
        }).then(user => {
          if (!user) {
            bcrypt.hash(id, null, null, (err, hash) => {
              models.User.create({
                name,
                password: hash
              })
                .then(user => {
                  console.log(user);
                  res.json({
                    ok: true
                  });
                })
                .catch(err => {
                  console.log(err);
                  res.json({
                    ok: false,
                    error: 'Что то пошло не так!'
                  });
                });
            });
          } else {
            res.json({
              ok: false,
              error: 'Имя занято!',
              fields: ['name']
            });
          }
        });
    }
    console.log(id, age, name);
    res.json({Success: true})
}

async function acyncFyn() {
    await setTimeout(() => {}, 10000)
    return true;
}

module.exports =  {
    authUser,
    postExample
}