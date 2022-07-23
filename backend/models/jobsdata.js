
const mongoose = require("mongoose");


const jobsdata= new mongoose.Schema({
    
    title:{type:String,required:true},
    city:{type:String,required:true},
   company:{type:String,required:true},
      exp:{type:Number},
      salary:{type:Number},
      desc:{type:String},
      apply:{type:String,required:true}

},
    {
        versionKey: false,
        timestamps:true
    }


)


module.exports =mongoose.model("jobsdata",jobsdata)