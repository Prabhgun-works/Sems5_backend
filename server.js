const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ port: 8888 });

let rooms = new Map();
// {
//     // "1234"= [s1, s2, s3]; 
// }
wss.on("connection", function (socket) {
    console.log("A new user connected");
    socket.on("message", function (message) {
        // {type: "join", payload: {roomId: "1234"}}
        let parsedMessage = JSON.parse(message);
        if (parsedMessage.type == "join") {
            let roomId = parsedMessage.payload.roomId;

            if (!rooms.get(roomId)) {
                rooms.set(roomId, new Set());
            }
            rooms.get(roomId).add(socket);

            // Assign the roomId to the socket for later use
            socket.roomId = roomId;

            socket.send("You are added to room " + roomId.toString());
            console.log(rooms);
        } else if (parsedMessage.type == "chat") {
            let roomId = socket.roomId;
            let message = parsedMessage.payload.message;

            if (!roomId || !rooms.get(roomId)) {
                socket.send("You are not in a valid room.");
                return;
            }

            let allClients = rooms.get(roomId);
            allClients.forEach((s) => {
                s.send(message);
            });
        }
    });
});