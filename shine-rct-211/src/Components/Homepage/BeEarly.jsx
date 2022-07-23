import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {early} from "../../data";
import styles from "../../styles/beEarly.module.css";
import { homeJobDetails } from "../../Redux/SinglePage/action";
import { useEffect } from "react";
import {Link} from "react-router-dom"

const BeEarly = () => {
  const dispatch = useDispatch();
  const jobData = useSelector(state => state.jobReducer.jobData);
  useEffect(() => {
    dispatch(homeJobDetails());
  }, []);
  return (
    <div >
      <h1 style={{fontSize:"45px"}}>Be An Early Applicant</h1>
      <div className={styles.chiki}>
      {jobData?.filter((item,index)=>index<3).map((item, index) => {
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
};

export default BeEarly;
