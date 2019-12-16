var mongoose = require('mongoose');
var User = require('../../model/model');
const url = "mongodb+srv://ser9eevich:Qwerty12345@myapp-c6sro.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

/**
 * Метод принимающий параметры для регистрации
 * @param name - имя пользователя
 * @param surname - фамилия пользователя
 * @param email - email адрес пользователя
 * @param password - пароль пользователя
 */
function Registration(req, res, next) {
    var user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password
    })

    User.find({ email: user.email }, function (err, userEmails) {
        if (err) throw err;
        if (userEmails != 0) {
            console.log('Email is already in use!');
        }
        else user.save(function (err) {
            if (err) throw err;
            console.log('New user is created!')
        })
    })
    res.redirect("/");
}

module.exports = Registration;