

import * as types from "./actionTypes"
import axios from "axios"


export const register =(payload)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST})

    return axios.post("http://localhost:5000/reg",payload).then(r=>{
        console.log(r)
        dispatch({type:types.REGISTER_SUCCESS,payload:r.data})
        return r


    }).catch(e=>{
        console.log(e)
dispatch({type:types.REGISTER_FAILURE,payload:e})
return e
    })


}