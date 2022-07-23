

const express = require("express")

const router = new express.Router()
const jobdata=  require("../models/jobsdata")


router.get("/",async(req,res)=>{
    try{
        const jobs= await jobdata.find()
        res.send(jobs)

    }catch(err){
        res.send(err)
    }
})



router.get("/:id",async(req,res)=>{
    try{
        const singjob = await jobsdata.findById(req.params.id)
        if(singjob){
            res.send(singjob)
        }else{
            res.status(400).send("product not found");
        }
    }catch(err){
        res.send(err)


    }
})


module.exports = router;