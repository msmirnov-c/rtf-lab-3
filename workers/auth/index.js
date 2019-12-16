var mongoose = require('mongoose');
var User = require('../../model/model');
const url = "mongodb+srv://alexp:pass@tinkoffdb-sfgtm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })

function Authorization(req, res, next) {
    

    User.find({email: req.body.email, password: req.body.password }, function (err, users) {
        if (err) throw err;
        console.log(users);
        if (users.length === 0) {
            console.log("Что то пошло не так!");
            req.session.user = {
                exсeption: true
            }
            res.redirect("/auth");
        } else {
            console.log("Авторизация прошла успешно!")
            req.session.user = {
                email: req.body.email,
                password: req.body.password
            }
            res.redirect("/")
        }
    }) 
} 

module.exports = Authorization