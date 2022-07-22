import React from "react";
import styles from "../../styles/career.module.css";

const Career = () => {
  return (
    <>
      <div className={styles.topp}>
        <div className={styles.fun}>
          <div className={styles.upp}>
            <div style={{ marginTop: "4px" }}>
              <i class="fa-solid fa-magnifying-glass-minus"></i>
            </div>
            <h4 style={{ marginTop: "4px" }}>Search Your Dream Career</h4>
          </div>
        </div>

        <div className={styles.tun}>
          <div className={styles.dom}>
            <div style={{ marginTop: "4px" }}>
              <i class="fa-solid fa-user-plus"></i>
            </div>
            <h4 style={{ marginTop: "4px" }}>Create Your Profile</h4>
          </div>
        </div>
      </div>

      <div className={styles.topmat}>
        <div className={styles.mat}>
          <h1 style={{ fontSize: "40px" }}>Are you an Employer?</h1>
          <a href="https://recruiter.shine.com/"><button className={styles.act}>Search Your Hire</button></a>
          <a href="https://recruiter.shine.com/online-package/offer/free-job-posting/?utm_source=shine&utm_medium=footerButton&utm_campaign=Candidate"><button className={styles.pact}>Post a job</button></a>
        </div>
      </div>

      <h1>Aspire to Senior Roles in Career</h1>

      <div>
        <div className={styles.boxx}>
          <div className={styles.tochef}>
            <div className={styles.chef}>
              <div><img className={styles.step} src="https://cdn4.vectorstock.com/i/1000x1000/97/98/user-icon-with-laptop-computer-male-person-vector-19299798.jpg"/></div>
              <div style={{ marginTop: "15px",fontSize: "20px" ,fontWeight: "400" }}>Chief Technology Officer</div>
            </div>
          </div>

          <div className={styles.tochef}>
            <div className={styles.chef}>
              <div ><img className={styles.step} src="https://static.thenounproject.com/png/40157-200.png"/></div>
              <div style={{ marginTop: "15px" }}>Chief Marketing Officer</div>
            </div>
          </div>

          <div style={{ marginTop: "40px"}}>
          <div className={styles.tochef}>
            <div className={styles.chef}>
              <div><img className={styles.step} src="https://icon-library.com/images/test-icon-png/test-icon-png-18.jpg"/></div>
              <div style={{ marginTop: "15px" }}>Data Science</div>
            </div>
          </div>
          </div>

          <div style={{ marginTop: "40px"}}>
          <div className={styles.tochef}>
            <div className={styles.chef}>
              <div><img className={styles.step} src="https://cdn1.iconfinder.com/data/icons/man-user-human-avatar-person-profile-business/100/01-1User-18-512.png"/></div>
              <div style={{ marginTop: "15px" }}>Chief Product Officer</div>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div className={styles.hut}>
      <div className={styles.bun}>
        <h1 style={{fontSize:"40px"}}>Explore Dream Career of Your Choice</h1>
        <button style={{
          height:"50px",
          width:"150px",
          backgroundColor:"orange",
          border:"none",
          borderRadius:"5px"
          }}>Career Planner</button>
      </div>

      <img style={{width:"550px"}} src="https://www.shine.com/next/static/images/explore-dream-career.png"/>
      </div>

      <h1>Latest From Blog</h1>
      <div className={styles.chini}>
        <div className={styles.gouri}>
          <a href="https://learning.shine.com/talenteconomy/mint-shine-talent-insights/job-index-report/"><img style={{width:"100%",height:"200px"}} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2FMicrosoftTeams-image_2.png&w=1920&q=75"/></a>
          <h3>Mint +Shine Talent Insights</h3>
        </div>
        <div className={styles.gouri}>
          <a href="https://learning.shine.com/talenteconomy/career-help/what-are-white-collar-jobs-10-jobs-to-consider/"><img style={{width:"100%",height:"200px"}} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fwhite-collar-jobs.jpg&w=1920&q=75"/></a>
          <h3>What Are White Collar Jobs</h3>
        </div>
        <div className={styles.gouri}>
          <a href="https://learning.shine.com/talenteconomy/career-help/explore-it-jobs-without-coding/"><img style={{width:"100%",height:"200px"}} src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fonline-form-filling-jobs.png&w=1920&q=75"/></a>
          <h3>Explore It Jobs Without Coding</h3>
        </div>
      </div>
    </>
  );
};

export default Career;
