// import React from 'react'


// const Slide = () => {
//   return (
//     <div>Slide</div>
//   )
// }

// export default Slide

import React, { Component } from "react";
// import Slider from "react-slick";
import yellow from "../../images/yellow.png";
import winter from "../../images/winter.png";
import mint from "../../images/mint.png";
import Infosys from "../../images/Infosys.png";
import styles from "../../styles/Slide.module.css"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
    
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        {/* <Slider {...settings}>
          <div className="slider">
            <img src={yellow}/>
          </div>
          <div>
            <img src={winter}/>
          </div>
          <div>
          <img src={mint}/>
          </div>
          <div>
          <img src={Infosys}/>
          </div>
          
        </Slider> */}
      </div>
    );
  }
}