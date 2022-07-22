import React from 'react'
import axios from "axios"
import { useState } from 'react'
import {useDispatch} from "react-redux"
import Regifooter from "./Regifooter"
import {register} from "../../Redux/register/action"

import {Navigate, useNavigate,} from "react-router-dom"
import styles from "../register/Register.module.css"
import { Button } from '@chakra-ui/react'

const Register = () => {

const navigate = useNavigate()
    const dispatch=useDispatch();
const [page1,setpage1] = useState(true)
const [page2,setpage2] = useState(true)
const [page3,setpage3] = useState(true)
const [page4,setpage4] = useState(true)
const [page5,setpage5] = useState(true)

const [isregi,setisregi] = useState(false)
const [iscollege,setiscollege]= useState(false)
const [isyear,setisyear] = useState(false)




    const [name,setname] = useState("");
    const [email,setemail] = useState("")
    const [mobile,setmobile] = useState("")
    const [pass,setpass] = useState("")

    const [gender,setgender]= useState("")
const [location,setLocation] =useState("")

const [degree,setdegree] = useState("")
const [college,setcollege] = useState("")
const [year,setyear] =useState("")
const [course,setcourse] = useState("")




const [skills,setskills] = useState([])
const[oneskill,setoneskill] = useState();

const addskilss =()=>{
    setskills([...skills,oneskill])
}


  function regi1 (){
    setpage1(false)
  }

  function regi2(){
    setpage2(false)

  }

  function regi3(){
    setpage3(false)
  }

  function regi4(){
    setpage4(false)
  }


  function regi5(){
    setpage5(false)
  }
  

  const [gologin,setgologin] = useState(false)

  const logintab=()=>{
  setgologin((pre)=>!pre)
}

const sendpayload=()=>{
  const payload = {name,email,mobile,pass,gender,location,degree,

college,year,course}

 dispatch(register(payload)).then((r)=>{
  
  alert(r.response.data)
  if(r.response.status===200){
    navigate("/login")
  }else{
    navigate("/register")
  }
  
 }).catch((e)=>{
 alert(e.response)
navigate("/register")
 })

    // college, year, course
   
  }







  return  page1?(
    <div>
<div className={styles.topreg}>
   <img className={styles.imgshine}  src ="data:image/png;base64,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"

    />
    <div >
      <button className ={styles.loginbut}
       onClick={()=>logintab()}>
        Login
      </button>
    </div>
</div>

 <div className={styles.cont}>
 <div  className={styles.mid}>
       <div className={styles.contimg}>
        <img src = "https://static1.shine.com/c/s1/bundles/Winter__Registration-3e833dd.png"
         />
         <h2>Register with Resume</h2>
         <br/>
       <h4>we will auto fill your deatails</h4>
        <button>Resume</button>

       </div>
       <div>
        <hr style={{width:"3px",marginLeft:"30px",marginRight:"40px", height:"600px"}}></hr>
       </div>
       <div className={styles.cont1}>
        <br/>
        <h2 style={{color:"black"}}>Let's get started, tell us about yourself.</h2>
        <h3 style={{color:"grey"}}>it only takes a couple of minutes to get started</h3>
        <input type ="text" placeholder='Name' value ={name}
        onChange={(e)=>setname(e.target.value)} /><br /><br/>
 <input type ="text" placeholder='Email' value ={email}
        onChange={(e)=>setemail(e.target.value)} /><br /><br/>
 <input type ="text" placeholder='mobile' value ={mobile}
        onChange={(e)=>setmobile(e.target.value)} /><br /><br/>
 <input type ="text" placeholder='password' value ={pass}
        onChange={(e)=>setpass(e.target.value)} /><br /><br/>
<div className={styles.continuebut} onClick ={()=>regi1()}>
    continue→  
</div>
 

<p style={{marginLeft:"40%",marginTop:"20px"}}> or</p>
<div  style ={{display:"flex"}} className={styles.social}>
             <div>
                <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png"

                />
             </div>

            <div>
               <img src ="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2019/02/linkedin.jpg"/>

            </div>
            <div>
                <img  src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png"/> </div>
       </div>


 </div>
 </div>

</div>

<Regifooter />


    </div>
  ):page2 ?(
 <div>
    <div className={styles.cont}>
<div className={styles.container}>

    <div className={styles.container1}>

        <div style={{marginLeft:"130px"}}>
            <span style ={{fontSize:"28px",fontweight:"800",marginTop:"20px"}}>welcome {name},</span>
<p style ={{fontSize:"15px",fontweight:"400", color:"#6d7883",marginTop:"20px"}}>Thanks for registering. compleate your profile</p>
       <h4 style={{fontsize:"20px",fontweight:"800" ,color:"#6d7883",marginTop:"20px"}} >what is your identity?</h4>
       
       
       
        </div>
    </div>

    <div className={styles.container1}>
  <button className={styles.identity}onClick={()=>setgender("male")}>
    <div className={styles.identity1} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}></div>
Male</button>
<button className={styles.identity}onClick={()=>setgender("female")}>
    <div className={styles.identity2} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}></div>
Female</button>
<button className={styles.identity}onClick={()=>setgender("non-binary")}>
    <div className={styles.identity3} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}></div>
non-binary</button>
<button className={styles.identity}onClick={()=>setgender("not-disclose")}>
    <div className={styles.identity4} width="70px" style={{marginLeft:"20px",marginTop:"10px"}}></div>
not disclose</button>

    </div>
    <div className={styles.container2}>
        <div className={styles.containerconti} onClick={()=>regi2()}>continue  → 
        </div>
    </div>
</div>
    </div>
 <Regifooter />
 </div>
  ):page3 ?(
<div>


{/*this is third page*/}
<div className={styles.cont}>
    <div className={styles.container}>
        <div className={styles.container2}>
    <h4 style={{fontSize:"28px", fontweight:"800",marginRight:"25%",marginTop:"30px"}}>which city you live in?</h4>


        </div>
        <div className={styles.container1}>
<button className={styles.identity} onClick={()=>setLocation("Delhi/ncr")}>
    <div className={styles.identity5} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
</div>Delhi/Ncr
</button>
<button className={styles.identity} onClick={()=>setLocation("Mumbai")}>
    <div className={styles.identity6} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
        </div>Mumbai
</button>
<button className={styles.identity} onClick={()=>setLocation("Pune")}>
    <div className={styles.identity7} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
         </div>Pune
</button>
        </div>
        <div className={styles.container1}>
<button className={styles.identity} onClick={()=>setLocation("Bangalore")}>
    <div className={styles.identity8} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
</div>Bangalore
</button>
<button className={styles.identity} onClick={()=>setLocation("Chennai")}>
    <div className={styles.identity9} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
        </div>Chennai
</button>
<button className={styles.identity} onClick={()=>setLocation("Hyderabad")}>
    <div className={styles.identity10} width="50px" style={{marginLeft:"20px",marginTop:"10px"}}>
         </div>Hyderabad
</button>
        </div>
        <p style={{display:"flex", flexDirection:"row"}}><span><hr width="205px" style={{marginLeft:"200px"}}/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="195px"/></span></p>    

        <div className={styles.container2}>
        <input
            style ={{marginRight:"12%",height:"40px",width:"500px",border:"1px solid grey",borderRadius:"5px"}}
            type="text"
            placeholder="enter location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            />

        </div>
        <div className={styles.container2}>
            <div className={styles.containerconti} onClick={()=>regi3()}>
                continue → 


            </div>
        </div>
    </div>

</div>
<Regifooter/>

</div>
  ):page4?(
<div>
{/* this /s page 4*/}
<div className ={styles.cont}>
      <div className={styles.container}>
        <div className={styles.container2}>
          <h4 style={{fontSize:'22px',fontweight:"800",marginLeft:"8%",marginRight:"3px",
        color:"rgb(75,75,75"}}>what is your higest qualification</h4>
        </div>

       <div className={styles.container2}>
        <div className={styles.quali}>
          <button className={styles.identity_third} onClick={()=>setdegree("M.C.A")}>
            <h4>M.C.A</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("M.S.c")}>
            <h4>M.S.C</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("B.A")}>
            <h4>B.A</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("B.Sc")}>
            <h4>B.S.C</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("B.Com")}>
            <h4>B.com</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("B.Tech")}>
            <h4>B.Tech</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("M.Tech")}>
            <h4>M.Tech</h4>
          </button>
          <button className={styles.identity_third} onClick={()=>setdegree("MBA")}>
            <h4>MBA</h4>
          </button>
        </div>

       </div>
       <div className={styles.container2}>
        <div className={styles.containerconti} onClick={()=>regi4()}>
          continue →
        </div>

       </div>

      </div>


  </div>
    <Regifooter />
 </div>
 ):page5 ?(
<div>
  <div className={styles.cont}>
    <div className={styles.container}>
      
      <div className={styles.container2}>
        <h4 style={{fontSize:"22px",fontweight:"800",marginRight:"30",marginTop:"30px",color:"rgb(75,75,75)",margin:"auto",textAlign:"center"}}>
          what is your college name
        </h4>

      </div>

  <div  className={styles.container2} style={{marginTop:"-80px"}}>
    <input 
     style ={{marginRight:"",height:"40px",width:"500px",borderRadius:"5px",border:"1px solid grey"}}
     type="text"
     placeholder='enter college name'
     value ={college}
     onChange={(e)=>setcollege(e.target.value)}
     />
     <button style={{height:"42px",width:"42px",marginRight:"60px",cursor:"pointer"}}
     onClick={()=>setiscollege(true)}
     >Next</button>


  </div>

  {iscollege?(
    <div className={styles.container2} style={{marginTop:"-40px"}}>
        <h4 style={{fontSize:"22px",fontweight:"800",marginRight:"30",marginTop:"30px",color:"rgb(75,75,75)",margin:"auto",textAlign:"center"}}>
        
        in which year did you compleate?</h4>
     <input style={{marginRight:"",height:"40px",width:"500px",borderRadius:"5px",border:"1px solid grey"}}
     type="text"
     placeholder='enter value'
     value ={year}
     onChange={(e)=>setyear(e.target.value)}
     />
     <button style={{height:"42px",width:"42px",marginRight:"60px",cursor:"pointer"}}
     onClick={()=>setisyear(true)}
     >Next</button>
    </div>
  ):("")}

  {isyear?(
 <div>
   <div className={styles.container2} style ={{marginTop:"10px"}}>
   <h4 style={{fontSize:"22px",fontweight:"800",marginRight:"30",marginTop:"30px",color:"rgb(75,75,75)",margin:"auto",textAlign:"center"}}>
      what was your course type?</h4>


   </div>
   <div className={styles.container2} style={{marginTop:"-20px"}}>
    <div className={styles.quali}>
      <button className={styles.identity_third} style={{height:"50px"}} onClick={()=>setcourse("Full Time")}>
        <h4 style={{marginLeft:"5px",height:"20px",marginTop:"1px",widh:"",color:"grey"}}>Full Time</h4>

      </button>
      <button className={styles.identity_third} style={{height:"50px"}} onClick={()=>setcourse("Full Time")}>
        <h4 style={{marginLeft:"5px",height:"20px",marginTop:"1px",widh:"",color:"grey"}}>Part Time</h4>

      </button>
      
      <button className={styles.identity_third} style={{height:"50px",width:"130px"}} onClick={()=>setcourse("Full Time")}>
        <h4 style={{marginLeft:"5px",height:"20px",marginTop:"1px",width:"130px",color:"grey"}}>Correspondece</h4>

      </button>
    </div>

   </div>
 </div>
  ):("")}

  <div className={styles.container2}>
  <div className={styles.containerconti} onClick={()=>regi5()}>
     Next →
  </div>

  </div>
  
    </div>

  </div>
  <Regifooter />
</div>
  ):(

 <div>
  <div className={styles.cont}>
    <div className={styles.container}>
<div className={styles.container2}>
  <h4 style ={{fontSize:"22px", fontweight:"800",marginRight:"50%",marginTop:"10px"
,marginRight:"300px",color:"rgb(75,75,75"
}}>skills</h4>

</div>

<div className={styles.skillcontainer}>
<div className={styles.skillcont2}>
<input style={{marginLeft:"0px",height:"40px",width:"250px",borderRadius:"5px",
border:"1px solid grey"
}} 
type="text"
placeholder='enter skill'
value={oneskill}
onChange={(e)=>setoneskill(e.target.value)}



/>
<button 
style={{height:"42px", width:"42px",marginRight:"0px",cursor:"pointer"}}
onClick={()=>addskilss()}
>→</button>

<div style ={{padding:"10px 10px 10px 10px"}}>
  {skills.map((item)=>{
    return <button className={styles.identity_third}
    style={{float:"left",margin:"5px 5px 5px 5px"}}>
      <h4 style={{
        marginLeft:'5px',marginTop:"8px",color:"grey",float:'left'
      }}>{item}</h4>
    </button>
  })}

</div>


</div>
<hr />

  <div className={styles.skillcont3}
  style ={{paddingTop:"50px"}}
  >
    <div className={styles.container2}>
      <div className={styles.skills}>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"java"])}
        ><h4 >Java</h4>
        </button>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"javascript"])}
        ><h4 >Java script</h4>
        </button>

      </div>
    </div>

    <div className={styles.container2}>
      <div className={styles.skills}>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"html"])}
        ><h4 >HTML</h4>
        </button>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"css"])}
        ><h4 >CSS</h4>
        </button>

      </div>
    </div>
    <div className={styles.container2}>
      <div className={styles.skills}>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"react"])}
        ><h4 >React.js</h4>
        </button>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"express"])}
        ><h4 >Express.js</h4>
        </button>

      </div>
    </div>
    <div className={styles.container2}>
      <div className={styles.skills}>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"node"])}
        ><h4 >Node.js</h4>
        </button>
        <button className={styles.identity_third}
        onClick={()=>setskills([...skills,"mongodb"])}
        ><h4 >MongoDb</h4>
        </button>

      </div>
    </div>

  </div>
</div>


<div className={styles.container2}>
  <div className={styles.containerconti}
  onClick={()=>sendpayload()}>

  Submit

  </div>

</div>
    </div>

  </div>
  <Regifooter />
 </div>

  )

  
  

}
export default Register