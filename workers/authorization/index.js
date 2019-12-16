var mongoose = require('mongoose');
var User = require('../../model/model');
const url = "mongodb+srv://ser9eevich:Qwerty12345@myapp-c6sro.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

function Authorization(req, res, next) {
    User.find({ email: req.body.email, password: req.body.password }, function (err, users) {
        if (err) throw err;
        console.log(users);
        if (users.length != 0) {
            req.session.user = {
                name: users[0].name,
                surname: users[0].surname,
                email: users[0].email
            }
            res.redirect("/");
        } else {
            console.log("error");
            res.redirect("/authorization");
        }
    })
}

module.exports = Authorization;