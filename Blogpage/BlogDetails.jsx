import React from "react";
import data from "./data.json";
import BlogItem from "./BlogItem";
import styles from "./Blog.module.css"
export const BlogDetails = () => {
    console.log(data)

    return(
        <>
        
        <div className={styles.talentbox}>
            <div><h1 className={styles.talenthead}>Talent Economy</h1></div>
            <div>
                <p className={styles.talentpara}>It goes without saying that over time, jobs will require a different set of unique skillsets, as opposed to the ones required now. By applying for the online professional courses present on this platform, you'll be able to stay ahead of the curve and massively improve your job prospects by staying future-ready at all times.</p>
            </div>
        </div>
        <div className={styles.maincontainer}>
            {data.map((item)=>(
                 <div>
                 <BlogItem item={item}/>
                 </div>
            ))}
        </div>

        <div className={styles.rightbox}>
            <div><h1>Talk Me To</h1></div>
            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/Trends.jpg" alt="" />
                    <div>
                        <h1>Trends</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/suply_chain.jpg" alt="" />
                    <div>
                        <h1>Supply Chain</h1>
                    </div>
                </div>

            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/training-2874597_640_1.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Skills Courses</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/six_sigma.jpg" alt="" />
                    <div>
                        <h1>Six Sigma</h1>
                    </div>
                </div>
            </div>

            
            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/Words.png" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Resume Tips</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/project_managment.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Project</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/Officiology_-_Office_Jokes.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Officiology</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/carousel_banner_final.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Mint+Shine</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/dream-job-2904780_640_1.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Job Search</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/megaphone-2374502_640.png" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Job Alert</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/Panel-Interview.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Interview Tips</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/questions_1.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Interview <br />Question</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/ifrs.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>IFRS</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/Human_Resources.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Human <br />Resources</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/gst.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>GST</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/old-newspaper-350376_640_1.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Government <br />News</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/digital_marketing.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Digital <br />Marketing</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/career_prospective.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Carrier <br />Prospectus</h1>
                    </div>
                </div>
            </div>

            <div className={styles.rightdiv}>
                <div className={styles.rigthdiv1}>
                    <img src="https://static1.shine.com/l/m/images/blog/category/resume.jpg" style={{width:"105px",height:"80px"}} alt="" />
                    <div>
                        <h1>Carrier Help</h1>
                    </div>
                </div>

                <div className={styles.rigthdiv1}>
                <img src="https://static1.shine.com/l/m/images/blog/category/big_data.jpg" style={{width:"105px",height:"80px"}}  alt="" />
                    <div>
                        <h1>Big Data</h1>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}