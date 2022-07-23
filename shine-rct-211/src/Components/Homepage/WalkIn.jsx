import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import data from "../data";
import {walkin} from "../../data";
import { homeJobDetails } from "../../Redux/SinglePage/action";
import styles from "../../styles/beEarly.module.css";
import { useEffect } from "react";
import {Link} from "react-router-dom"

const WalkIn = () => {
  const dispatch = useDispatch();
  const jobData = useSelector(state => state.jobReducer.jobData);
  useEffect(() => {
    dispatch(homeJobDetails());
  }, []);
  console.log(jobData, "walkin");
    return (
        <div >
          <h1 style={{fontSize:"45px"}}>Walkin Jobs</h1>
          <div className={styles.chiki}>
          {jobData?.filter((item,index)=>index%3===0 && index!=0).map((item, index) => {
           
              return (
                <Link to={`/jobDetails/${item._id}`}>
                  <div>
                    <div className={styles.subhasree}>
                     <div className={styles.limca}>
                     <h3 style={{paddingTop:"15px"}}>{item.title}</h3>
                      <div className={styles.haram}>{item.company_name}</div>
    
                      <div className={styles.exp}>
                        <div><i class="fa-solid fa-location-dot"></i>{item.location}</div>
                        <div><i class="fa-solid fa-suitcase"></i>{item.experience}</div>
                      </div>
    
                      <div className={styles.para}>
                        <p><i class="fa-solid fa-circle"></i>{item.job_type}</p>
                      </div>
                      <div className={styles.yami}>Apply</div>
                     </div>
                     
                    </div>
                    
                  </div>
                </Link>
              );
            })}
        </div>
        
         </div>
      );
}

export default WalkIn;