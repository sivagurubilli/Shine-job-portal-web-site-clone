import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/search.module.css";

const Searchbar = () => {

  const username =useSelector(store=>store.regReducer.username)
  console.log(username)
  return (
    <div className={styles.hardik}>
      <div className={styles.leftt}>
        <img
          className={styles.gumi}
          src="https://www.shine.com/next/static/images/NewShinelogo.gif"
        />
        <div className={styles.kgf}>
          <input className={styles.inpoot} type="text" placeholder="Job title,skills" />
          <div className={styles.fitoor}>
            <div className={styles.dil}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.torightt}>
      <div className={styles.rightt}>
        <div><i class="fa-solid fa-bell"></i></div>
        <div><i class="fa-solid fa-cart-shopping"></i></div>
        <div><i class="fa-solid fa-user"></i></div>
       
      </div>
      </div>
    </div>
  );
};

export default Searchbar;
