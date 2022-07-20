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
    axios.get(`http://localhost:8080/job/${id}`)
        .then((res) => dispatch(getJobDetSucc(res.data)))
    .catch((e)=>dispatch(getJobDetFail()))
}

export {getJobDetails}