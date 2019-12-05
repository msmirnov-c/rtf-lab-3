const DBProvider = require("./dbprovider");
const {Origin, Comment} = require("./model/comment");

const onconnection =  (wss, ws) => {
    const db = new DBProvider(/*'../data.sqlite'*/);
    //connection is up, let's add a simple simple event
    ws.on('message', async msg => {
        const {origin, login, pass, comment} = JSON.parse(msg);
        //log the received message and send it back to the client
        console.log('received: %s', msg);

        if(comment !== undefined)
            await db.addComment(new Comment(comment , login , origin));
        //const comments = [];
        await db.getComments(origin, function (err , rows) {
            //comments.push(row);
            wss.clients.forEach(client => {
                console.log(err);
                client.send(JSON.stringify(rows));
                // client.send(`Hello, broadcast message -> ${msg}`);
            });
        });
        /*wss.clients.forEach(client => {
            //console.log(msg);
            client.send(comments.toString());
           // client.send(`Hello, broadcast message -> ${msg}`);
        });*/
        //ws.send(`Hi there, I am a WebSocket server ${message}`);
    });

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
};

module.exports = onconnection;
