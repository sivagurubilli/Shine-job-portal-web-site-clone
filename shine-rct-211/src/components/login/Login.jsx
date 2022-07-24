import React,{useState} from 'react'
import  styles from "./login.module.css"

import { login } from '../../Redux/register/action'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Footer from '../Homepage/Footer'
const Login = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const [datal,setdatal] = useState({
  email:"",
  pass:""
})

const handlech =(e)=>{
  const {email,pass,value,id}= e.target
      setdatal({...datal,[id]:value})
}
const handlesub=()=>{
  dispatch(login(datal)).then(r=>{
  if(r==="success"){
    navigate("/")
  }
  }).catch(e=>{
    console.log(e)
  })

}

  return (
    <div>
      <div className={styles.topreg}>
 <img className={styles.imgshine}  src ="data:image/png;base64,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"

    /> </div>
<div className={styles.emptydiv}>

</div>

<div  className={styles.cont1}>


  <div className={styles.cont2}>
    <h2 style={{marginLeft:"50px",fontWeight:"600",fontSize:"30px",marginTop:"10px"}}>LOGIN</h2>
    <div style={{marginLeft:"50px",marginTop:"30px"}}>
      <h3>email</h3>
      <input 
      style={{height:"40px",width:"300px",border:"1px solid grey"}}
      id ="email"
      value={datal.email}
      onChange ={handlech}
      />
    </div> 
    
    <div style={{marginLeft:"50px",marginTop:"30px"}}>
      <h3>password</h3>
      <input 
      style={{height:"40px",width:"300px",border:"1px solid grey"}}
      id ="pass"
      value={datal.pass}
onChange={handlech}
      />

      
    </div>

    <button style={{width:"300px",height:"40px",backgroundColor:" #8AA3D8",margin:"30px 0 0 50px",
    color:"white",borderRadius:"5%"
    
  
  }}onClick={()=>handlesub()}>LOGIN</button>






<div style={{margin:"20px 0 0 50px"}}>
<h3>Dont have shine account <Link to ="/register" style={{color:"blue" }}>Register now</Link></h3>
  </div>
  </div>
  <div className={styles.cont3}>
    
      <h2 style={{margin:"30px 0px 0px 20px"}}>
       

        
300,000 jobs from 15,000 companies
      </h2>

      <div className={styles.cont31}>
<div className={styles.cont31img}>
   
</div>
<h3>Create your account and receive matching jobs automatically
Fill in your profile details and let our unique matching technology bring you the most relevant job opportunities.</h3>

</div>
<div className={styles.cont31}>
<div className={styles.cont31img}>
   
</div>
<h3>Be completely anonymous
You choose which recruiters see your personal and contact detail</h3>

</div>
<div className={styles.cont31}>
<div className={styles.cont31img}>
   
</div>
<h3>
Equip yourself for a great career
Research industries and employ our career services to be better equipped for your professional life.</h3>

</div>
</div>

</div>


<Footer />

    </div>
  )
}

export default Login