

const jobsdata = require("./models/jobsdata")

const jobsdata1 = require("./jobsdata")

const Defaultdata = async()=>{
    try{
        const storedata = await jobsdata.insertMany(jobsdata1)
    }catch(err){
        console.log("errr"+err.message)
 
    }
}



module.exports =Defaultdata