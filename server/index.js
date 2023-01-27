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

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
connectDB();

app.use(cors({ origin: "http://localhost:3000" }));
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
app.listen(PORT, () => {
  console.log(
    `Server is Running on PORT: http://localhost:${PORT}`.yellow.bold
  );
});
