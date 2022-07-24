import React from 'react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import styles from "./BlogNav.module.css"
const BlogNav = () => {
  return (
    <div>
        <div className={styles.learn}>
            <div className={styles.leftnav}>
                <div>
                    <img src="https://www.visa.com/images/merchantoffers/2021-09/1632471503257.ShineLearning.jpg" style={{width:"200px",height:"40px"}}  alt="" />
                </div>
                <div>
                     <Input style={{width:"250px",height:"35px"}} placeholder='Search courses , assements...' />
                </div>
            </div>

            <div className={styles.rightnav}>
                <div><h1>Job Assistance</h1></div>
                <div><h1>Practice Set</h1></div>
                <div><h1>Free Resources</h1></div>
                <div><h1>Blog</h1></div>
                <div><img src="https://i.pinimg.com/originals/fb/fa/bf/fbfabfd9218c3104c97b48a41bb9c9ce.png" style={{width:"21px",height:"22px"}} alt="phone" /></div>
                <div><img src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-33.png" style={{width:"21px",height:"22px"}} alt="signup" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0BWuHgxw4SK8_8IPduATr0KXh4mgQjxIDA&usqp=CAU" style={{width:"21px",height:"22px"}} alt="cart" /></div>

            </div>
        </div>

        <div className={styles.blognav2}>
            <div>
              <Select style={{height:"30px"}} placeholder='explore categories'>
                 <option value='option1'>Sales & Marketing</option>
                 <option value='option2'>Operation Management</option>
                 <option value='option3'>Banking & Finance</option>
                 <option value='option4'>Information Technology</option>
                 <option value='option5'>Human & Resources</option>
                 <option value='option6'>Management</option>
                 <option value='option7'>Mass Communication</option>
                 <option value='option8'>Personel Development</option>
                 <option value='option9'>Law</option>
                 
               </Select>
            </div>
            <div><h1>Digital Marketing</h1></div>
            <div><h1>Six Sigma</h1></div>
            <div><h1>Project Management</h1></div>
            <div><h1>Big Data</h1></div>
            <div><h1>IT Software</h1></div>
            <div><h1>Data Software</h1></div>
            <div><h1>Cloud Computing</h1></div>
            <div><h1>Analytics Vidha</h1></div>
        </div>
    </div>
  )
}

export default BlogNav