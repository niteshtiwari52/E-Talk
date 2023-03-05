const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const colors = require("colors");
const chatRoutes = require("./routes/chatRoutes");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
import cors from "cors";
import helmet from "helmet";
import { socket } from "socket.io";

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
connectDB();

// socket.io implement

const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
     socket.broadcast.emit("receive_message", data)

    //  socket.on('message', (data) => {
    //   console.log(`New message from ${socket.id}: ${data}`);
  });
});

app.use(helmet());
app.use(express.json()); //to accept json data

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to E-Talk Server",
  });
});

// app.get("/api/chat", (req, res) => {

//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Server is Running on PORT: http://localhost:${PORT}`.yellow.bold
  );
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connetcted to Socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(`${userData.name} with _id: ${userData._id} is connected.`);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    if (!room) {
      return console.log(`no room is selected by user`);
    }
    socket.join(room);
    console.log(`user joined room. Room _id : ${room._id}`);
  });

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;
    if (!chat) {
            return;
          }
    // if (!chat.users) {
    //   retconsole.log("chat.users is not defined");
    // }

    
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) {
        return;
      }
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
});

// io.on("connection", (socket) => {
//   console.log("connected to socket.io");
//   // console.log(socket);

//   socket.on("setup", (userData) => {
//     if (!userData) {
//       return console.log(`No user connected`);
//     }
//     socket.join(userData._id);
//     console.log(`${userData.name} is connected. User id is ${userData._id}`);
//     // console.log(userData);
//     socket.emit("connected");
//   });

//   socket.on("join chat", (room) => {
//     // console.log(room);
//     if (!room) {
//       return console.log(`no room is selected by user`);
//     }
//     socket.join(room._id);
//     console.log(`USer joined Room - ${room._id}`);
//   });

//   socket.on("new message", (newMessageRecieved) => {
//     var chat = newMessageRecieved.chat;
//     if (!chat) {
//       return;
//     }
//     console.log(chat);

//     if (!chat.users) {
//       return console.log("chat.users not defined");
//     }

//     chat.users.forEach((user) => {
//       if (user._id === newMessageRecieved.sender._id) {
//         return;
//       }

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });
// });

// io.on("connection", (socket) => {
//   console.log(`socket ${socket.id} connected`);

//   // send an event to the client
//   socket.emit("foo", "bar");

//   socket.on("foobar", () => {
//     // an event was received from the client
//   });

//   // join the room named "room1"
//   socket.join("room1");

//   // broadcast to everyone in the room named "room1"
//   io.to("room1").emit("hello");

//   // upon disconnection
//   socket.on("disconnect", (reason) => {
//     console.log(`socket ${socket.id} disconnected due to ${reason}`);
//   });
// });
