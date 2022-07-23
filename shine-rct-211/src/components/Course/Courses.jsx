import React from "react";
import Filter from "./Filter/Filter";
import SalesAndMarketing from "./Courses/SalesAndMarketing";
import InformationAndTechnology from "./Courses/InformationAndTechnology";
import OperationManagement from "./Courses/OperationManagement";
import HumanResources from "./Courses/HumanResources";

const Courses = (props) => {
  return (
    <div>
      <Filter />
      <SalesAndMarketing />
      {/* <InformationAndTechnology />
      <OperationManagement />
      <HumanResources /> */}
    </div>
  );
};

export default Courses;
