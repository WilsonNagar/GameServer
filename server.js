// import { Server } from "socket.io";
require("dotenv").config();

const io = require("socket.io")(process.env.PORT);

io.on("connection", (socket) => {

  console.log(socket.id)

  socket.on("message", (args) => {
    console.log("got this on server : " +JSON.stringify(args));
    socket.broadcast.emit("messagelist",{'nickname' : args['nickname'].toString()});
  });
});
// console.log("hello")