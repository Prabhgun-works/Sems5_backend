                                             

// wss.on("connection", function(socket){
//     console.log("Server running on "+ port); 
//     socket.send("Welcome!"); 
//     setInterval(() => {
//         socket.send("Realince stack price is "+ " " + Math.random() ); 
//     }, 1000); 

// })
const { WebSocketServer } = require('ws');
const port = 8012;

const wss = new WebSocketServer({ port });

wss.on("connection", function(socket) {
    console.log("Server running on " + port);
    socket.send("Welcome!");

    socket.on("message", function(message) {
        console.log(message.toString());
        if (message.toString() === "ping") {
            socket.send("Pong");
        } else {
            socket.send("You have not sent a ping message");
        }
    });
});