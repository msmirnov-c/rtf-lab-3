class User {
    constructor(email, nickname, passwordHash, answerHash){
        this.email = email;
        this.nickname = nickname;
        this.passwordHash= passwordHash;
        this.answerHash = answerHash;
    }
}
module.exports = User;
