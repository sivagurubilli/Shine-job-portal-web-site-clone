import React from 'react'
import { useState,useEffect } from 'react'
import styles from "./Jobspage.module.css"
import axios from 'axios'

const Jobdesc = ({dsc,apply,sa}) => {

console.log(apply)
  const handleapply=()=>{
sa(!apply)
    alert("you job appliaction is successfully submittted")
  }
  return (
    <div>
   <div className={styles.maindiv}>
      
<div className={styles.companycard}>
<div className={styles.titledsc}>
 Position: {dsc.title} 

</div>
<div className={styles.companyname}>

  company name:   {dsc.company}
</div>

<div className={styles.exp}>

   experince: 0 to  {dsc.exp} years
</div>

<div className={styles.salary}>

   salary: {dsc.salary}
</div>
<div className={styles.location}>

   worklocation: {dsc.city}
</div>

<div className={styles.buttonbox}>
    <button  onClick={()=>handleapply()} className={styles.Applybtn}>
        {apply==true?"applied":dsc.apply}</button>

</div>
</div>
   
   <div className={styles.discrbox}>
    <div className={styles.skills}>
        <h2>skills </h2>
        <h3>HTML,CSS,Java,Javascript,React.js,Node.js,Express.js,springboot,Problem solving,english,softskills,communication skills</h3>
    </div>
    <div className={styles.discr}>
        <h2>Requirements</h2>
        <li>Fluent knowledge of latest HTML/CSS standards and best practices</li>
<li>Working knowledge of JavaScript and AngularJS</li>
<li>Working knowledge of Node.js and Express</li>
<li>Solid Understanding of HTTP protocol and how server-side code is processed on the client</li>
<li>Some experience with Photoshop or Sketch is a plus (creating sprites, optimizing, cutting or adjusting images)</li>
<li>Experience building Responsive websites for web, tablet and mobile devices

Eye for details is crucial</li>
<li>Good understanding of overall web design including basic usability, accessibility, industry standards, architecture, and navigation</li>
    </div>
   </div>
   </div>

    </div>
  )
}

export default Jobdesc 

