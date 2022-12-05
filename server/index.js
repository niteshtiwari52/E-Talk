import express from "express";
import { chats } from "./data/data";
const dotenv = require("dotenv");


// const PORT = 4000;
const app = express();
dotenv.config();

app.use(express.json());

app.get("/" , (req,res) => {
    res.json({
        message : "Welcome to E-Talk Server",
    });
});

app.get('/api/chat', (req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req,res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 4000
app.listen(PORT , ()=> {
    console.log(`Server is Running on PORT: http://localhost:${PORT}`);
});