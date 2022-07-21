
const mongoose = require("mongoose")
const Registerusers = new mongoose.Schema({
   name:{type:String,required:true},
   email:{type:String,required:true},
   mobile:{type:Number,required:true},
   pass:{type:String,required:true},
   gender:{type:String,required:true},
 location:{type:String,required:true}, 
   degree:{type:String,required:true}, 
   college:{type:String}, 
   year:{type:String,required:true},
   course:{type:String,required:true},
  
})



module.exports = mongoose.model("Registerusers",Registerusers)