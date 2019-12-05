
class DBProvider {
    constructor(dbpath = 'data.sqlite') {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database(dbpath);
        db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, nick TEXT, passHash TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, user TEXT, origin INTEGER, date TEXT, FOREIGN KEY(user) REFERENCES users(login))');
        this.getUserByLogin = (login, pass, onend)  =>
            db.each(`SELECT nick, login FROM users WHERE login='${login}' AND passHash = '${pass}'`, onend);
        this.getUserByNick = (nick, pass, onend)  =>
            db.each(`SELECT nick, login FROM users WHERE nick='${nick}' AND passHash = '${pass}'`, onend);
        this.close = db.close.bind(db);
        this.addUser = user =>
            db.run(`INSERT INTO users VALUES('${user.login}', '${user.nick}', '${user.pass}')` );
        this.addComment = com =>
            db.run(`INSERT INTO comments(comment, user, origin, date) VALUES('${com.text}', '${com.user}', '${com.origin}', ${com.date.toString()})` );
        this.getComments = (origin, onend) =>
            db.all(`SELECT comment, nick, date FROM comments INNER JOIN users ON users.login = comments.user WHERE origin='${origin}'`, onend);
    }
}

module.exports = DBProvider;
