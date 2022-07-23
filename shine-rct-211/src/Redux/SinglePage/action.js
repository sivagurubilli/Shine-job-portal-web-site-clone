import * as types from "./actionTypes"
import axios from "axios"
// get details actions
const getJobDetReq = () => (
    { type: types.JOB_DETAILS_GET_REQ }
);
const getJobDetSucc = (payload) => (
    { type: types.JOB_DETAILS_GET_SUCC, payload }
);
const getJobDetFail = () => (
    {type:types.JOB_DETAILS_GET_FAIL}
)

const getJobDetails = (id) => dispatch=>{
    dispatch(getJobDetReq());
    axios.get(`https://shine-jobs.herokuapp.com/jobDetails/${id}`)
        .then((res) => dispatch(getJobDetSucc(res.data)))
    .catch((e)=>dispatch(getJobDetFail()))
}


// home page job cards
const homeJobDetReq = () => (
    { type: types.HOME_JOB_DETAILS_GET_REQ }
);
const homeJobDetSucc = (payload) => (
    { type: types.HOME_JOB_DETAILS_GET_SUCC, payload }
);
const homeJobDetFail = () => (
    {type:types.HOME_JOB_DETAILS_GET_FAIL}
)

const homeJobDetails = (id) => dispatch=>{
    dispatch(homeJobDetReq());
    axios.get(`https://shine-jobs.herokuapp.com/jobDetails`)
        .then((res) => dispatch(homeJobDetSucc(res.data)))
    .catch((e)=>dispatch(homeJobDetFail()))
}



export {getJobDetails,homeJobDetails};

