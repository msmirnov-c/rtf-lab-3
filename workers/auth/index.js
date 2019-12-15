const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_DSN;
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
const jwt = require('jsonwebtoken');

mongoClient.connect(function(err, client){});

function authUser(req, res, next) {
    const db = mongoClient.db("auth");
    const collection = db.collection("users");

    collection.find({username: req.body.username}).toArray(function(err, results){
        if (results.length === 0){
            res.json({status: "error", error: "No such user"});
            return
        }
        if (results[0].password === req.body.password){
            let token = jwt.sign({username: results[0].username}, process.env.TOKEN_KEY, {expiresIn: 24*60*60});
            res.cookie('token', token, { maxAge: 24*60*60, httpOnly: true });
            // res.json({status: "ok", username: req.body.username, id: results[0]._id, token: token})
            res.redirect('/')
        } else {
            res.json({status: "error", error: err})
        }
    });
}

function registerUser(req, res, next) {
    const db = mongoClient.db("auth");
    const collection = db.collection("users");
    collection.insertOne({username: req.body.username, password: req.body.password}, function(err, result){

        if(err){
            res.json({status: "error", error: err})
        }else {
            res.redirect('/login.html')
            // res.json({status: "ok", username: result.ops[0].username, id: result.ops[0]._id})
        }

    });
}

module.exports = {authUser, registerUser};