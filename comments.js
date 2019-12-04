const onconnection = (ws) => {

    //connection is up, let's add a simple simple event
    ws.on('message', (comments) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        wss.clients.forEach(client => {
            client.send(`Hello, broadcast message -> ${message}`);
        });
        //ws.send(`Hi there, I am a WebSocket server ${message}`);
    });

    //send immediatly a feedback to the incoming connection
    ws.send('Hi there, I am a WebSocket server');
};

module.exports = onconnection;
