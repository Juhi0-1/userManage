const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    
    firstname:{
        type :String,
        required:true
    },
    middlename:{
        type:String,

    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },

    
});
module.exports = mongoose.model('User', userSchema)