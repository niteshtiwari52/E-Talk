import express from "express";


const PORT = 4000;
const app = express();

app.use(express.json());

app.get("/" , (req,res) => {
    res.json({
        message : "Welcome to E-Talk Server",
    });
});

app.listen(PORT , ()=> {
    console.log(`Server is Running on PORT: http://localhost:${PORT}`);
});