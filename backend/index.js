
const express = require("express")
const mongoose = require("mongoose")
const port = process.env.PORT || 5000;


const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/shine-web",
(err)=>{
    if(err)return console.log(err);
    console.log("connected to mongodb")
})



app.use("/reg",require("./routers/userRoutes"))
app.use("/log",require("./routers/loginRouters"))
app.use("/getjobs",require("./routers/jobrouter"))

app.listen(port,()=>{
console.log(`server start on port ${port}`)})


