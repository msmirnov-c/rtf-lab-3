var express = require('express');
var router = express.Router();
var jade = require('jade');

function indexPage(req, res, next) {
    const login = req.cookies.login;
    if (login !== undefined) {
        res.locals.greeting = `ПРИВЕТ, ${login}!`;
        res.locals.action = "РАЗЛОГИНИТЬСЯ";
        res.locals.loggedInDirection="";
        res.locals.direction = "/api/logout";
    } else {
        res.locals.action = "ЗАЛОГИНИТЬСЯ";
        res.locals.direction = "/login";       
        res.locals.greeting = "ЗАРЕГАТЬСЯ";
        res.locals.loggedInDirection="/reg";
    }

    res.locals.title = 'История IE';
    var html = jade.renderFile('./views/index.jade', res.locals);
    res.send(html);
}

function regPage(req, res, next) {
    res.locals.title = 'Реганье';    
    var html = jade.renderFile('./views/reg.jade', res.locals);
    res.send(html);
}

function loginPage(req, res, next) {
    res.locals.title = 'Залогинство';
    var html = jade.renderFile('./views/login.jade', res.locals);
    res.send(html);
}

function beginning(req, res, next) {
    res.locals.title = 'Восхождение и расцвет';
    var html = jade.renderFile('./views/beginning.jade', res.locals);
    res.send(html);
}

function stagnation(req, res, next) {
    res.locals.title = 'Застой';
    var html = jade.renderFile('./views/stagnation.jade', res.locals);
    res.send(html);
}

function breakdown(req, res, next) {
    res.locals.title = 'Упадок';
    var html = jade.renderFile('./views/breakdown.jade', res.locals);
    res.send(html);
}

function test(req, res, next) {
    res.locals.title = 'Тест';
    var html = jade.renderFile('./views/test.jade', res.locals);
    res.send(html);
}

router.get('/', indexPage);
router.get('/reg', regPage);
router.get('/login', loginPage);

router.get('/beginning', beginning);
router.get('/stagnation', stagnation);
router.get('/breakdown', breakdown);
router.get('/test', test);

module.exports = router;