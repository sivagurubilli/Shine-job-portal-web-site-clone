const express = require("express");
const cors = require("cors");

const connect = require("./db");
const app = express();
app.use(cors());
app.use(express.json())
const jobDetails = require("./controllers/JobsController");

let port = process.env.PORT || 5432;

app.use("/jobDetails", jobDetails);

app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log("connected")
    }
    catch (err){
        console.log(err.message,"-->connection error <--");
    }
    console.log("listening on port 5432");
});