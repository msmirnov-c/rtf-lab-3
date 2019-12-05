const Origin = {
    Client: 0,
    Node: 1,
    Java: 2
};

class Comment {
    constructor(text, userLogin, origin, date = Date.now())
    {
        this.text = text;
        this.user = userLogin;
        this.origin = origin;
        this.date = date;
    }
}

module.exports = {Origin, Comment};
