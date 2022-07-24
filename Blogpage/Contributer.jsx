import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import amgk from "../blogImages/amgk.png"
import amggk from "../blogImages/amggk.png"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
      <div style={{width:"80%",marginLeft:"150px"}}>
       
        <Slider {...settings}>
          <div>
            <img src={amgk} alt="ak" />
          </div>
          <div>
            <img src={amggk} alt="ak" />
          </div>
          <div>
            <img src={amgk} alt="ak" />
          </div>
        </Slider>
      </div>
    );
  }
}