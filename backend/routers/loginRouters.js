const jwt = require('jsonwebtoken');
const Regusers = require("../models/usermodel")

const router = require("express").Router()

router.post("/",async(req,res)=>{
    try{
        const {email,pass} = req.body
        let exist = await Regusers.findOne({email})
        if(!exist){
            return res.status(400).send({message:"user not register"})
        }
        if(pass.length<6){
            return res.status(400).send({message:"password must be greater than 5 characters"})
        }
        if(exist.pass!=pass){
            return res.status(400).send({message:"invalid credintials"})
        }
    
    payload={
        user:{
            id:exist.id
        }
    }
  jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
      (err,token)=>{
          if(err)throw err;
  
          return res.status(200).send({token,message:"succsessfully loggedin",userdata:exist.name,isAuth:true})
      })
  
  
  
  }catch(err){
          console.log(err)
          res.status(500).send("internal error")
      }
  
  });
  
  module.exports =router;
 