class DBProvider {
    constructor() {
        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database('data.sqlite');
        db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, nick TEXT, passHash TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, user TEXT, origin INTEGER, date TEXT, FOREIGN KEY(user) REFERENCES users(login))');
        this.getUserByLogin = (login, pass, onend)  =>
            db.each(`SELECT nick, login FROM users WHERE login='${login}' AND passHash = '${pass}'`, onend);
        this.getUserByNick = (nick, pass, onend)  =>
            db.each(`SELECT nick, login FROM users WHERE nick='${nick}' AND passHash = '${pass}'`, onend);
        this.close = db.close.bind(db);
        this.addUser = (login, nick, pass) =>
            db.run(`INSERT INTO users VALUES('${login}', '${nick}', '${pass}')` );
    }
}

module.exports = DBProvider;
