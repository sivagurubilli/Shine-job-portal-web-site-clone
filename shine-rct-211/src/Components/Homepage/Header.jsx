import React from 'react'
import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.topnish}>
        <div className={styles.nisha}>
            <div className={styles.diva}>
                <div><i class="fa-solid fa-mobile-screen"></i></div>
                <div>Download App</div>
            </div>

            <div className={styles.diva}>
                <div><i class="fa-solid fa-user"></i></div>
                <div>For Employers</div>
            </div>

            <div className={styles.diva}>
                <div><i class="fa-solid fa-phone"></i></div>
                <div>Help</div>
            </div>
        </div>
    </div>
  )
}

export default Header