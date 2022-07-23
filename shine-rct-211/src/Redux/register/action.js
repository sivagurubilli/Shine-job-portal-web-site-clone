

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

export const login =(payload)=>(dispatch)=>{
   
    dispatch({type:types.LOGIN_REQUEST})
    return axios.post("http://localhost:5000/log",payload).then(r=>{
        dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
    
        console.log(r.data.userdata)
         alert(r.data.message)
        return ("success")
        
    
       
    }).catch(e=>{
        dispatch({type:types.LOGIN_FAILURE})
       
        console.log(e)
        alert(e.data.message)
        return e
    })
}