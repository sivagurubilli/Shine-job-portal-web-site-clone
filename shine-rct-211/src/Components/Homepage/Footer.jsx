import React from 'react'
import styles from "../../styles/Footer.module.css"

const Footer = () => {


 
 
          
    return (
<>
    <div className={styles.rekha}>
    <div className={styles.mum}>


            <div className={styles.chipku}>
                <div className={styles.papaya}>
                    <img className={styles.bebu} src="https://www.shine.com/next/static/images/NewShinelogo.gif"/>
                    <p>Great career starts here!</p>

                    <strong>Download Shine App</strong>
                    <div className={styles.dugu}>
                        <a href="https://play.google.com/store/apps/details?id=com.net.shine&referrer=utm_source%3Ddesktop%26utm_medium%3Dorganic"><img className={styles.chepi} src="https://kstatic.googleusercontent.com/files/c79a702f4efe05549f285a7b8dcbef6296d888be5c40ce5b27b82a60d4fcaeec8397ebba4d310d4e8eba1d80d9ba947ab133909b3dc4b799511b9bbb3ac849e8"/></a>
                       <a href="https://apps.apple.com/in/app/shine-com-job-search/id950558510?ls=1&utm_campaign=ios_app&utm_medium=banner&utm_source=Shinewebpage"> <div style={{color:"gray",fontSize:"30px"}}><i class="fa-brands fa-apple"></i></div></a>
                    </div>

                </div>
            </div>


            <div className={styles.chipku}>
                <div className={styles.papaya}>
                    <strong style={{color:"black"}}>JOB SEEKERS</strong>
                    <div className={styles.tree}>
                    <a href="https://www.shine.com/registration/parser/"><p>Register / Login</p></a>
                    <a href="https://www.shine.com/job-search/"><p>Browse Jobs</p></a>
                    <a href="https://www.shine.com/free-job-alerts/"><p>Create Free Job Alert</p></a>
                    <a href="https://resume.shine.com/"><p>Job Assistance Services</p></a>
                    <a href="https://learning.shine.com/"><p>Courses</p></a>
                    </div>
                </div>
            </div>


            <div className={styles.chipku}>
                <div className={styles.papaya}>
                <strong>EMPLOYERS</strong>
                <div className={styles.tree}>
                <p>Recruiter India</p>
                <p>Post Job</p>
                </div>

                </div>
            </div>


            <div className={styles.chipku}>
                <div className={styles.papaya}>
                <strong>PARTNER SITES</strong>
                <div className={styles.tree}>
                <p>English Mate</p>
                <p>Study Mate</p>
                <p>Hindustantimes.com</p>
                <p>Livemint.com</p>
                <p>Livehindustan.com</p>
                <p>OTTplay.com</p>
                </div>

                </div>
            </div>


            <div className={styles.chipku}>
                <div className={styles.papaya}>
                <strong>CONTACT US</strong>
                <div className={styles.tree}>
                <p>080-1006 2222</p>
                <p>contactus@shine.com</p>
                </div>

                <div className={styles.gold}>
                <a href="https://www.linkedin.com/company/shinecom/"><div className={styles.h1}><i class="fa-brands fa-linkedin-in"></i></div></a>
                <a href="https://twitter.com/Shinedotcom?lang=en"><div className={styles.h2}><i class="fa-brands fa-twitter"></i></div></a>
                <a href="https://www.facebook.com/shinedotcom/"><div className={styles.h3}><i class="fa-brands fa-facebook-square"></i></div></a>

                </div>

                </div>

                
            </div>

        </div>
    </div>

    <div className={styles.footer_body_bottom}>
                <div>
                    <span>Feedback</span>
                    |
                    <span>FAQs</span>
                    |
                    <span>About Us</span>
                    |
                    <span>Contact Us</span>
                    |
                    <span>Privacy Policy</span>
                    |
                    <span>Fraud Alert</span>
                    |
                    <span>Business news</span>
                    |
                    <span>English News</span>
                    |
                    <span>Terms and Conditions</span>
                    |
                    <span>Discalimer</span>
                    |
                    <span>Report a Job Posting</span>
                </div>
                <div>
                    <span className={styles.footer_body_bottom_right}>&#169; 2020 HT Media Limited</span>
                </div>
            </div>


    </>


  )
}

export default Footer