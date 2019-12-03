class DBProvider {
    constructor() {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('1.sqlite');
        db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, nick TEXT, passHash TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, user TEXT, origin TEXT)');
        this.getUser = (login, pass, onend)  => {
            db.each(`SELECT nick, login FROM users WHERE login='${login}' AND passHash = '${pass}'`, onend/*function(err, row) {
                console.log(row.id + ': ' + row.info);
            }*/);
        };
        this.addUser = (login, nick, pass) => {
            db.prepare(`INSERT INTO users VALUES('${login}', '${nick}', '${pass}')` );
        }
        /*
        db.serialize(function() {
            /* var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

             for (var i = 0; i < 10; i++) {
                 stmt.run('Ipsum ' + i);
             }

             stmt.finalize();
         *
            db.each('SELECT nick FROM users', function(err, row) {
                console.log(row.id + ': ' + row.info);
            });
        });*/
    }
    close() {
        db.close();
    }
}

module.exports = DBProvider;
