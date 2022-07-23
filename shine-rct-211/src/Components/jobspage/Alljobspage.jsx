import axios from "axios"
import React ,{useEffect, useState}from "react";
import {useParams }  from "react-router";

import  Jobdesc from "./Jobdesc"
import { IoWalletOutline} from "react-icons/io5";
import { IoLocationSharp} from "react-icons/io5";

import styles from "./Jobspage.module.css"

import SearchBar from "./Searchbar";

function Alljobspage (){
    const [page, setPage] = useState(1);
const [limit, setLimit] = useState(10);
    const [data,setData] = useState([])
    const [dis,setdesc] = useState({})
    const {location} =  useParams();
    const [apply,setapply] = useState(false)


    const handlesearch =()=>{
          
          axios.get("http://localhost:5000/getjobs").then((r)=>{
    
          setData(r.data)
          }).catch((e)=>{
            console.log(e)
          })
    }
 
    const getData = (el) => {
       setapply(false)
        setdesc(el)
      };

      const sa =()=>{
        setapply(!apply)
      }
    


    useEffect(()=>{
        handlesearch()
    },[])


useEffect(()=>{
    setdesc(data[0])

},[data])
console.log(dis)


    return(

        <div>
            <SearchBar />
       
       <div style={{display:"flex"}}>

  <div className={styles.rightjobs}>
    <div>
        {data.map((el)=>(
  
<div key ={el._id}
onClick={()=>getData(el)}
className ={styles.boxjobs}

>
   
       
      
<h1
  style={{
  
    color:"#303E48",
    fintSize:"17px",
    marginLeft:"25px",
    marginTop:"10PX"
  }}

>{el.title}</h1>


<h2  style={{
  
  color:"#303E48",
  fintSize:"17px",
  marginLeft:"25px",
  marginTop:"10PX"
}}

>company: {el.company}


</h2>
<div style={{display:"flex"}}>
<h2  style={{
  
  color:"#303E48",
  fintSize:"17px",
  marginLeft:"25px",
  marginTop:"10PX"
}}

>Location : {el.city}</h2>

<div style={{margin:"15px 0 0 30px"}}><IoLocationSharp/></div>


</div>

<h2  style={{
  
  color:"#303E48",
  fintSize:"17px",
  marginLeft:"25px",
  marginTop:"10PX"
}}

>Exp: 0 to {el.exp} years


</h2>
<div style={{display:"flex"}}>
<h2  style={{
  
  color:"#303E48",
  fintSize:"17px",
  marginLeft:"25px",
  marginTop:"10PX"
}}

>CTC : {el.salary} /-RS P.A </h2>  <div style={{margin:"15px 0 0 30px"}}><IoWalletOutline/>
</div>


</div>
<h2 style={{marginLeft:"300px" ,color:"blue"}}

onClick={()=>alert("sucees fully submitted to this position")
}>Apply </h2>


     

</div>


        )

        )}
    </div>
   

  </div>
  
  <Jobdesc dsc={dis} apply={apply} sa={sa} />
       </div>
       


        </div>
    )
}

export default Alljobspage