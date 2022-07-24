import React from 'react'
import styles from "./Blog.module.css"
const BlogItem = ({item}) => {
    const {imageurl,heading,para,name} = item;
  return (
    <div>
        <div>
            <img src={imageurl} alt="image1"/>
        </div>
        <div>
            <h1 className={styles.heading}>{heading}</h1>
        </div>
        <div>
            <p>{para}</p>
        </div>
        <div>
            <h3 className={styles.name}>{name}</h3>
        </div>
    </div>
  )
}

export default BlogItem