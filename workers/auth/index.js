
/**
 * Метод принимающий 3 парамметра
 * @param {string} id - айди пользователя
 * @param {string} name - имя
 * @param {number} age - возраст
 */

// авторизация
function authUser(req, res, next) {
    const {id, name, age} = req.body;
    if (!id || !name || !age) {
      res.json({
        Success: false,
        error: 'Пустые поля недопустимы!'
        });
    } else {
      models.user.findOne({
        name
      })
      .then(user => {
        if (!user) {
          res.json({
            Success: false,
            error: 'Логин или пароль неверны!'
          });
        } else {
            if (!result) {
              res.json({
                Success: false,
                error: 'Логин или пароль неверны!'
              });
            } else {
              req.session.userId = user.id;
              req.session.userLogin = user.login;
              console.log('autuser');
              console.log(req.params.id);
              res.json({userAuth: true}) 
            }
          }
      });
    }
}

// регистрация
function postExample(req, res, next) {
  console.log(req.body)
  const {id, name, age} = req.body;
  const idConfirm = req.body.idConfirm;
    
  if (!id || !name || !age) {
    res.json({
      Success: false,
      error: 'Пустые поля недопустимы!'
      });
    } else if (id !== idConfirm) {
      res.json({
      Success: false,
      error: 'Пароли не совпадают!'
      });
    } else {
      models.user.findOne({
        name
        })
        .then(user => {
          if (!user) {
            models.user.create({
              name,
              id
              })
              .then(user => {
                console.log(id, age, name);
                res.json({Success: true});
                console.log(user);
                })
          } else {
            res.json({
              Success: false,
              error: 'Имя уже занято!',
              fields: ['name']
            });
          }
        });
      }
    }

async function acyncFyn() {
    await setTimeout(() => {}, 10000)
    return true;
}

module.exports =  {
    authUser,
    postExample
}