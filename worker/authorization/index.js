const mongoose = require('mongoose');
var User = require('../../dataBase/model');
mongoose.connect('mongodb+srv://Ulia:123654789@mydata-3ii8g.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function Authorization(req, res, next) {
  User.find({ userName: req.body.userName, password: req.body.password }, function (err, users) {
      if (err) throw err;
      console.log(users);
      if (users.length === 0) {
        console.log("Неверный логин или пароль!");
        res.redirect('/authorization');
      } else {
          console.log("Пользователь авторизован!");
          req.session.user = {
            userName: req.body.userName
          }
          res.redirect('/');
      }
  });
}

module.exports = Authorization;