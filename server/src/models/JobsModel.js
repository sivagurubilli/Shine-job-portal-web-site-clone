const mongoose = require("mongoose");

// jobs deatils database obj view
const JobDetailsSchema = new mongoose.Schema(
    {
        id:{type:Number,required:true,unique:true},
        title: { type:String, required: true },
        publish_date:{ type: String, required: true },
        company_name: { type: String, required: true },
        location: { type: String, required: true },
        experience: { type: String, required: true },
        job_type: { type: String, required: true },
        job_details: [{ type:String, required: true }],
        qualifications: [{ type:String, required: false }],
         roles_responsibilities: [{ type:String, required: false }],
        department: { type: String, required: true },
        industry: { type: String, required: true },
        education: { type: String, required: false },
        skills: { type: Array, required: true },
        company_details:{ type: String, required: false }
    },
    {
        versionKey: false,
        timestamps:true
    }
);

const JobDetails = mongoose.model("JobDetails", JobDetailsSchema);
module.exports = JobDetails;

