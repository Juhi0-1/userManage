const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/user_profile");
// user_profile
mongoose.set('strictQuery', true);

const express = require("express")
const app = express();

const userRoute = require('./routes/userRoute');

app.use('/', userRoute);

app.listen(8000, function(){
    console.log("server successfully started");
})