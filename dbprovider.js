
class DBProvider {
    constructor() {
        const path = require('path');
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database(path.join(__dirname, 'data.sqlite'));
        db.run("PRAGMA foreign_keys=ON");
        db.run('CREATE TABLE IF NOT EXISTS users (login TEXT PRIMARY KEY, nick TEXT UNIQUE, passHash TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT, user TEXT, origin INTEGER, date TEXT, FOREIGN KEY(user) REFERENCES users(login) ON UPDATE CASCADE)');
        this.getUserByEmail = (email, pass, onend)  =>
            db.get(`SELECT nick, login as email, passHash as pass FROM users WHERE login='${email}' AND passHash = '${pass}'`, onend);
        this.getUserByOnlyEmail = (email, onend)  =>
            db.get(`SELECT nick, login as email, passHash as pass FROM users WHERE login='${email}'`, onend);
        this.getUserByNick = (nick, pass, onend)  =>
            db.get(`SELECT nick, login as email FROM users WHERE nick='${nick}' AND passHash = '${pass}'`, onend);
        this.close = db.close.bind(db);
        this.addUser = (user, onend) =>
            db.run(`INSERT INTO users VALUES('${user.email}', '${user.nick}', '${user.pass}')`, onend);
        this.addComment = com =>
            db.run(`INSERT INTO comments(comment, user, origin, date) VALUES('${com.text}', '${com.user}', '${com.origin}', ${com.date.toString()})` );
        this.getComments = (origin, onend) =>
            db.all(`SELECT comment, nick, date FROM comments INNER JOIN users ON users.login = comments.user WHERE origin='${origin}'`, onend);
        this.changeUser = (oldEmail, newUserData, onend) => {/*
            db.run(`DELETE FROM users WHERE login = '${oldEmail}' `);
            this.addUser(newUserData, onend);
*/
            db.run(`UPDATE  users SET nick = '${newUserData.nick}', passHash = '${newUserData.pass}', login = '${newUserData.email}' WHERE login = '${oldEmail}';
                        --UPDATE users SET user = '${newUserData.email}' WHERE user = '${oldEmail}';`, onend);
        } ;

    }
}

module.exports = DBProvider;
