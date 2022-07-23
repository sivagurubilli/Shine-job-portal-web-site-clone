import React from 'react'

import {Link} from "react-router-dom"

const Dream = () => {
  return (
    <>
    <div style={{display: 'flex', width:"30%",gap:"50px",margin:"auto",marginTop:"40px"}}>
      
        <div style={{width:"100px"}}>
          <a href="https://www.shine.com/techassessments/"><img style={{width:"50px", height:"50px",backgroundColor:" rgba(152, 245, 224, 0.815)",borderRadius:"50px"}} 
          src="https://static.thenounproject.com/png/2404411-200.png"/></a>
          <h5>Assessment</h5>
        </div>

        <div style={{width:"100px"}}>
        <a href=""><img style={{width:"50px", height:"50px" ,backgroundColor:" rgba(242, 163, 167, 0.815)",borderRadius:"50px"}} 
        src="https://www.inventicons.com/uploads/iconset/2482/wm/512/18-Pathway-88.png"/></a>
        <h5>Career Path</h5>
        </div>
        
        <div style={{width:"100px"}}>
        <a href="https://www.shine.com/new/job-search"><img style={{width:"50px", height:"50px",backgroundColor:"rgba(123, 178, 228, 0.815)",borderRadius:"50px"}} 
        src="https://t3.ftcdn.net/jpg/03/14/40/50/360_F_314405038_pz6iwauC5XWGcZPjI0jZpNS3iOn9hOSM.jpg"/></a>
        <h5>Dream Job</h5>
        </div>
    </div>
    

    

    </>
  )
}

export default Dream