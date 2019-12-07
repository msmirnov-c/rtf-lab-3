const DBProvider = require("./dbprovider");
const Comment = require("./model/comment");
const clients = new Map();
const db = new DBProvider();
const onconnection =  (wss, ws) => {

    ws.on('message', async msg => {
        const {origin, login, pass, comment} = JSON.parse(msg);
        //log the received message and send it back to the client
        clients.set(ws, origin);//ws = origin;
        console.log('received: %s', msg);
        if(comment !== undefined)
            await db.addComment(new Comment(comment , login , origin));
        await db.getComments(origin, function (err , rows) {
            if(err)
                console.log(err);
            wss.clients/*.filter((client, or) => or === origin )*/.forEach(client => {
                if(clients.get(client) !== origin) return;
                client.send(JSON.stringify(rows));
            });
        });
    });
    ws.on('close', function() {
        delete clients[ws];
        console.log('The connection was closed!');
    });
    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
};

module.exports = onconnection;
