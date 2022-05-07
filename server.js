const express = require('express');
const app = express();
const server = require('http').createServer(app); // Creation du serveur avec le module http
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
}); // liaison du websocket avec le serveur


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

server.listen(3000, err => {
    if (err) throw err;
    console.log(`Server open on port ${3000}`)
})