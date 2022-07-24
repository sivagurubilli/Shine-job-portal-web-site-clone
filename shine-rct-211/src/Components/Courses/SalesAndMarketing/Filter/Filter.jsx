import React from "react";
import "./Filter.css";
const Filter = (props) => {
  const filterButton = ["Category", "Skills", "Provider", "More Filters"];
  return (
    <div>
      <div id="filter-main-container">
        <h1 className="filter-header">Course Found</h1>
        <div className="filter">
          <span className="filter-by">Filter by</span>
          <ul>
            {filterButton.map((item) => {
              return (
                <li>
                  <a href="" className="filter-by-btn">
                    {item}
                    <i class="material-symbols-outlined">expand_more</i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
