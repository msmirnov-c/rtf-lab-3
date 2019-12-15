var mongoose = require('mongoose');
var User = require('../../model/model');
const url = "mongodb+srv://alexp:pass@tinkoffdb-sfgtm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});  

/**
 * Метод принимающий 3 параметра
 * @param {string} firstName - имя 
 * @param {string} lastName - фамилия 
 * @param {string} email - электронная почта
 * @param {string} password - пароль
 */
function Registration(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })

    console.log(user);

    User.find({email: user.email}, function (err, users) {
        if (err) throw err;
        console.log(user);
        if (users.length === 0) {
           user.save(function (err) {
                if (err) throw err;
            })
        } else {
            console.log("Пользователь с такой почтой уже существует!")
        }
        res.redirect("/");
    }) 
} 

module.exports = Registration