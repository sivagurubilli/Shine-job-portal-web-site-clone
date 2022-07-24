import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react";
import Slider from "react-slick";
import bpo from "../blogImages/bpo.png"
import bank from "../blogImages/bank.png"
import report from "../blogImages/report.png"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
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
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div  style={{width:"80%", marginLeft:"150px"}}>
          
    
          <Slider {...settings}>
            <div >
                <img src={bpo} alt="bpo"/>
              
            </div>
            <div >
                <img src={bank} alt="bank"/>
              
            </div>
            <div >
                <img src={report} alt="report"/>
              
            </div>
            
          </Slider>
        </div>
      );
    }
  }
