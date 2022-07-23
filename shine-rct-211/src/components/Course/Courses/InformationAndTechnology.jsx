import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Course.style.css";
const InformationAndTechnology = (props) => {
  const [coursesData, SetCoursesData] = useState([]);

  const getCoursesData = () => {
    axios
      .get("http://localhost:8080/courses")
      .then((data) => {
        console.log(data.data);
        SetCoursesData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  return (
    <div className="course-main-container">
      {coursesData.map((item) => {
        return (
          <div className="course">
            <div className="course-tag">
              <span className="course-tag">{item.course_tag}</span>
            </div>
            <div className="course-sub">
              <div className="course-content-left">
                <img className="avatar" src={item.avatar} alt="avatar" />
                <div className="rating">
                  <span>{item.rating}</span>
                  <i class="material-symbols-outlined">grade</i>
                </div>
              </div>
              <div className="course-content-right">
                <h3 className="course-title">{item.title}</h3>
                <div className="author-and-duration">
                  <span className="author">{item.author}</span>
                  <p className="duration">{`Duration: ${item.duration} | ${item.mode}`}</p>
                </div>
                <p className="price">
                  <strong>{`₹ ${item.price}`}</strong>
                </p>
              </div>
            </div>
            <div className="explore-and-btn">
              <a className="explore" href="">
                Explore
              </a>
              <a className="buy-btn" href="">
                Buy Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InformationAndTechnology;
