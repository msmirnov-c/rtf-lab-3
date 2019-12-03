//import DBProvider from "../dbprovider";

const DBProvider = require("../dbprovider");
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/user',async function(req, res, next) {
  const db = new DBProvider();
  await db.getUser('test_u', '1', function(err, row) {
    res.json({login: row.login, nick: row.nick});
  });

  db.close();
  //next();
  //res.render('index', { title: 'Express' });
});

module.exports = router;
