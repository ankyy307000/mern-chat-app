const express = require("express");
const chats = require('./data/data');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes =require('./routes/userRoutes');


const app = express();
dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("App is running");
})

app.use('/api/user',userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started On PORT ${PORT}`.yellow.bold));

