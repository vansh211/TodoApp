const express = require('express');

const app = express();

require("dotenv").config(); 
// to get the configs fron env file

const Port = process.env.PORT || 3000;

app.use(express.json()); 
// middleware to parse data from json form

const todoRoutes = require("./routes/todos") 
// import routes

app.use("/api/v1", todoRoutes);
 // maping the routing after api/v1


app.listen(Port, ()=> {
    console.log(`Server Started at ${Port}`) 
    // staring the server at pport
})


const dbConnect = require("./config/database") // importing db connection function
dbConnect(); // calling func to connect with db

app.get("/", (req, res) => {
    res.send("THIS is homePage") // just a home api
})
