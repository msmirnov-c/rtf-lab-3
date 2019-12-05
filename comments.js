const DBProvider = require("./dbprovider");
const {Origin, Comment} = require("./model/comment");

const onconnection =  (wss, ws) => {
    const db = new DBProvider(/*'../data.sqlite'*/);/*
    db.getComments(origin, function (err , rows) {
            ws.send(JSON.stringify(rows));
        });*/
    ws.on('message', async msg => {
        const {origin, login, pass, comment} = JSON.parse(msg);
        //log the received message and send it back to the client
        console.log('received: %s', msg);
        if(comment !== undefined)
            await db.addComment(new Comment(comment , login , origin));
        await db.getComments(origin, function (err , rows) {
            wss.clients.forEach(client => {
                console.log(err);
                client.send(JSON.stringify(rows));
            });
        });
    });
    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
};

module.exports = onconnection;
