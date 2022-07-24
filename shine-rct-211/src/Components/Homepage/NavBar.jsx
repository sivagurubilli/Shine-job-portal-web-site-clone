import React from "react";
import styles from "../../styles/NavBar.module.css";
import {Link} from "react-router-dom"

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_left}>
    
        <div className={styles.drop_down}>
          <Link to="/" className={styles.nav_tab}>HOME</Link>
          <div className={styles.jobs}>
            
          </div>
        </div>

        <div className={styles.drop_down}>
          <li className={styles.nav_tab}>JOBS</li>
          <div className={styles.jobs}>
            <li><Link to ="/alljobs">Search</Link></li>
            <li>Job Alert</li>
          </div>
        </div>

        <div className={styles.drop_down}>
          <li className={styles.nav_tab}>JOB SEEKING ASSISTANCE</li>
          <div className={styles.resources}>
            <li>Profile Booster</li>
            <li>Application Highter</li>
            <li>Resume Writting</li>
          </div>
        </div>

        <div className={styles.drop_down}>
          <li className={styles.nav_tab}>COURSES</li>
          <div className={styles.resources}>
            <li>Sales and Marketing</li>
            <li>Information and Technology</li>
            <li>Operation Management</li>
            <li>Human Resource</li>
          </div>
        </div>

        <li className={styles.nav_tab}>CAREER GUIDANCE</li>
        <li className={styles.nav_tab}>BLOG</li>
      </div>
    </nav>
  );
}
