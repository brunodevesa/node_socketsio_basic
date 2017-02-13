let express = require('express');
let socketIO = require('socket.io');
let http = require('http');
let app = express();

let server = http.createServer(app);
let port = 8081;

// routes
let routes = require('./routes');
routes.myRoutes(app);

//middleware
app.use(express.static(__dirname + '/public'));


let io = socketIO(server);

io.on('connection', function (socket) {
    let user = socket.id.slice(10);
    console.log('user ' + user + ' is connected !');


    // listening events from client:
    socket.on('chat message', function (msg) {
        console.log('message from' + user + ' : ' + msg);
        // emit events to client:
        io.emit('chat message', msg);

    });

    // emit events to client:
    let randomNumber = Math.random();
    setInterval(function () {
        let randomNumber = Math.random();
        io.emit('arduino', Math.floor(randomNumber*1000) );
    }, randomNumber*50000);


});


server.listen(port, function () {
    console.log('express server listening on port ' + port);
});
