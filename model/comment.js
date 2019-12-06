class Comment {
    constructor(text, userLogin, origin, date = Date.now())
    {
        this.text = text;
        this.user = userLogin;
        this.origin = origin;
        this.date = date;
    }
}

module.exports = Comment;
