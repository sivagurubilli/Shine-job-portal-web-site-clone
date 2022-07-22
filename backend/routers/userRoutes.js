

const Regusers  = require("../models/usermodel")
const router = require("express").Router();

router.post("/",async(req,res)=>{
    try{
        const {name,email,mobile,pass,gender,location,degree,
            college,year,course} = req.body;
            let exist = await Regusers.findOne({email})
            if(exist){
                return res.status(400).send("user already exists")
            }
            if(mobile.length < 10){
                return res.status(400).send("mobileno is invalid")
            }
            if(pass.length < 6){
                return res.status(400).send("password must grater then  6 characters")
            }

            let newUser = new Regusers({name,email,mobile,pass,gender,location,degree,
                college,year,course} )

                await newUser.save()
                res.status(200).send("register succesfullly")

    }catch(err){
       
        res.status(500).send("internal error")
    
    }
})

module.exports = router;