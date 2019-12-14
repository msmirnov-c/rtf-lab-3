const express = require('express');
const app = express();
const fs = require("fs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

function register(name, email, password){
  let fileContent = fs.readFileSync("Auth.txt", "utf8");
  if (fileContent.includes(email) !== true) {
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      fs.appendFile('Auth.txt', ('{' + name + '$$$' + email + '$$$' + password), (err) => {
        if (err) throw err;
      });
      console.log('success');
      return 1;
    } else {
      console.log('empty field');
      return 0;
    }
  }
  else {
    console.log('how');
    return 0;
  }
}

function login(email, password){
  let fileContent = fs.readFileSync("Auth.txt", "utf8");
    console.log('------------------');
    let arr = fileContent.split('{');
    for (let i = 1; i < arr.length; i++){
      if (arr[i].includes(email) && arr[i].includes(password)) {
        console.log('success');
        return true;
      }
      else if (arr[i].includes(email)) {
        console.log('password was incorrect');
      }
      else if (arr[i].includes(password)){
        console.log('email was incorrect');
      }
      else{
        console.log('fail');
      }
    }
}

app.get('/',  (req, res) => {
  res.render('main.ejs')
});

app.get('/users',  (req, res) => {
  res.render('users.ejs')
});

app.get('/aboutauthors',  (req, res) => {
  res.render('aboutauthors.ejs')
});

app.get('/authorized',  (req, res) => {
  res.render('authorized.ejs')
});

app.post('/register', (req, res) => {
  if (register(req.body.name, req.body.email, req.body.password) === 1)
    res.redirect('/users');
  else
    res.redirect('/')
});

app.post('/login', (req, res) => {
  if (login(req.body.email, req.body.password) === true) {
    res.redirect('/authorized');
  }
  else
    res.redirect('/users')
});

app.listen(process.env.PORT || 3000);