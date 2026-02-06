const express = require('express');

const app = express();

require("dotenv").config();

const Port = process.env.PORT || 3000;

app.use(express.json());

const todoRoutes = require("./routes/todos")

app.use("/api/v1", todoRoutes);


app.listen(Port, ()=> {
    console.log(`Server Started at ${Port}`)
})


const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req, res) => {
    res.send("THIS is homePage")
})

// console.log("BODY:", req.body);

