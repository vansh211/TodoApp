const mongoose = require('mongoose'); //mongoose using to connect with mongoDb to server
require("dotenv").config();

const dbConnect = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error:", error);
        process.exit(1);
    }
};

module.exports = dbConnect;
