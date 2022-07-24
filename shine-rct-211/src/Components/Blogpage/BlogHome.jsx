import React from 'react'
import SwipeToSlide from './BrandSlider'
import { BlogDetails } from './BlogDetails'
import BlogNav from './BlogNav'
import PauseOnHover from "./Contributer"
import Lowerpart from './Lowerpart'
const BlogHome = () => {
  return (
    <div>
        <BlogNav/>
        <SwipeToSlide/>
        <BlogDetails/>
        <PauseOnHover/> 
        <Lowerpart/> 
    </div>
  )
}

export default BlogHome