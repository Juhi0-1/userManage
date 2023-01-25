const User = require('../models/userModel');

const loadRegister = async(req,res)=>{
    try{
       res.render('registration')
    }
    catch(error){
      console.log(error.message);
    }
}

const insertUser = async(req,res)=>{
  try{
     const user = new User({

      firstname:req.body.firstname,
      middlename:req.body.middlename,
      lastname : req.body.lastname,
      filename: req.file.filename,
      email : req.body.email,
      password: req.body.password,
      role:0,
      department:req.body.department ,

     });

     const userData = await user.save();

     if(userData){
      res.render('registration', {message:"Your registration is successful "})
     }
     else{
      res.render('registration', {message:"Your registration failed "})
     }

  }catch(error){
     console.log(error.message);
  }
}
module.exports = {
    loadRegister, insertUser
}