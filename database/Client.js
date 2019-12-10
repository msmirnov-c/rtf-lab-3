class DbClient{
    Constructor()
    {
        const path = require('path');
        const sqlite3 = require('sqlite3').verbose();
        const db = sqlite3.connect(path.join(__dirname, '/database/siteDb.sqlite'));
        db.run('CREATE TABLE IF NOT EXISTS Users ' +
            'Id NUMBER PRIMARY KEY IDENTITY,' +
            'Email TEXT,' +
            'Nickname TEXT,' +
            'passHash TEXT,' +
            'answerHash TEXT);' +
            'CREATE UNIQUE INDEX  IF NOT EXISTS UNQEmail on Users (Email);' +
            'CREATE UNIQUE INDEX  IF NOT EXISTS UNQNick on Users (Nickname);');
        this.AddUser = (email, nickname, passHash, answerHash) => {
            db.each(`INSERT INTO Users (${email}, ${nickname}, ${passHash}, ${answerHash})`);
        };
        this.DeleteUser = (identifier) => {
            if(typeof identifier === 'number') {
                db.each(`DELETE FROM Users WHERE Id = ${identifier}`);
            } else {
                db.each(`DELETE FROM Users WHERE (Email = ${identifier}) OR (Nickname = ${identifier}`);
            }
        }
    }
}

module.exports = DbClient();
