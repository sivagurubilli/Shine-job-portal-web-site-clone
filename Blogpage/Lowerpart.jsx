
import React from 'react'
import styles from "./Lowerpart.module.css"
const Lowerpart = () => {
  return (
    <div>
        <div className={styles.lowerpart}>
            <div className={styles.lowerpart1}>
                <div><h1>About Us</h1></div>
                <div><h1>Privacy Policy</h1></div>
                <div><h1>Terms & Conditions</h1></div>
                <div><h1>Contact Us</h1></div>
                <div><h1>Disclaimer</h1></div>
            </div>
            <div className={styles.lowerpart2} >
                <div><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" style={{width:"21px",height:"22px"}} alt="" /></div>
                <div><img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/linkedin_logo_icon_147268.png" style={{width:"21px",height:"22px"}}  alt="" /></div>
                <div><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" style={{width:"21px",height:"22px"}}  alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Lowerpart