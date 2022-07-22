const express = require("express");

const JobDetails = require("../models/JobsModel");

const router = express.Router();

// post request

router.post("", async (req, res) => {
    try {
        console.log(req.body);
        const data = await JobDetails.create(req.body);
        return res.send(data);
    }
    catch (err) {
        return res.send({ message: err.message });
    }
});

// get
router.get("", async (req, res) => {
    try {
        console.log(req.body);
        const data = await JobDetails.find({}).lean().exec();
        return res.send(data);
    }
    catch (err) {
        return res.send({ message: err.message });
    }
});
// singleData 
router.get("/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        console.log(req.body);
        const data = await JobDetails.findById(req.params.id).lean().exec();
        return res.send(data)
    }
    catch (err) {
        return res.send({ message: err.message });
    }
});




module.exports = router;