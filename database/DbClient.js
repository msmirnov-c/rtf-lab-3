class DbClient{
    constructor()
    {
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('./database/siteDb.sqlite');
        db.run('CREATE TABLE IF NOT EXISTS Users (' +
            'Id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'Email TEXT,' +
            'Nickname TEXT,' +
            'passHash TEXT);');
        db.run('CREATE UNIQUE INDEX IF NOT EXISTS UNQEmail on Users (Email);');
        db.run('CREATE UNIQUE INDEX IF NOT EXISTS UNQNick on Users (Nickname);');
        this.AddUser = (email, nickname, passHash, onend) => {
            db.each(`INSERT INTO Users (email, nickname, passHash) VALUES("${email}", "${nickname}", "${passHash}")`, onend);
        };
        this.GetAllUsers = () => {
            db.get(`SELECT * FROM Users;`);
        };
        this.DeleteUser = (identifier) => {
            if(typeof identifier === 'number') {
                db.each(`DELETE FROM Users WHERE Id = "${identifier}"`);
            } else {
                db.each(`DELETE FROM Users WHERE (Email = "${identifier}") OR (Nickname = "${identifier}"`);
            }
        };
        this.CheckUser = (identifier) => {
            db.get(`SELECT * FROM Users WHERE (Email = "${identifier}") OR (Nickname = "${identifier}"`);
        };
        this.CheckUserAuth = (identifier, password, onend) => {
            db.get(`SELECT * FROM Users WHERE ((Email = "${identifier}") OR (Nickname = "${identifier}")) AND (passHash = "${password}")`, onend);
        };
        this.close = db.close.bind(db);
    }
}
module.exports = DbClient;
