const Origin = {
    Client: 0,
    Node: 1,
    Java: 2
};

class Comment {
    constructor(id, text, userLogin, origin, date)
    {
        this.id = id;
        this.text = text;
        this.user = userLogin;
        this.origin = origin;
        this.date = date;
    }
}

module.exports = {Origin, Comment};
