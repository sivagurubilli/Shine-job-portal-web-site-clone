import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

export const FinalCard = () => {
    const navigate=useNavigate()
    const handleConfirm = () => {
        alert("Successfully Applied");
        navigate("/", { replace: true });
    }
    useEffect(()=>{
    axios.get("http://localhost:5000/reg")
        .then((r) => console.log(r))
            .catch((e) => console.log(e))
        },[])
  return (
    <div style={{margin:"10% auto"}}>
          <div className='jd_container' style={{width:"80%",margin:"auto",backgroundColor:"#f3fbfd"}}>
              <h4 style={{color:"magenta"}}>The data collected during registration, will be used for applying the post.</h4>
              <br></br>
              <h4>Please, click on confirm to apply sucessfully.</h4>
              <br></br>
              <button onClick={handleConfirm} style={{color:"purple",backgroundColor:"#90d6e7",padding:"1%"}}>Confirm</button>
          </div> 
    </div>
  )
}
