import { Flex, Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homeJobDetails } from '../../Redux/SinglePage/action';
import { JobDetailsCard } from './JobDetailsCard';

export const JobFilter = ({jobDetails}) => {
    const fullData = useSelector(state => state.jobReducer.jobData);
    const [filterData, setFilterData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(homeJobDetails());
        const data = [...fullData];
        var filD=[...filterData]
      data.map((item, index) => {
        var ind = (jobDetails.industry).trim();
          var x=item.industry.trim();
          if (ind === "IT - Software" || ind === " IT- Software" ) {
            if (x === ind || x === "IT- Software") {
                filD.push(item);
                console.log("yes",index)
            }
          } else {
            if (x === ind) {
                filD.push(item);
            }
            }
            console.log(filD);
            setFilterData(filD);
      });
    }, [dispatch]);

    console.log(filterData,"jf")
  return (
      <Grid gap="5%" paddingBottom="20px" gridTemplateColumns={"repeat(auto-fit,minmax(300px,max-content))"} >
          {filterData?.map((e) => (
            <JobDetailsCard jobDetails={e} flag={false} />
          ))}
    </Grid>
  )
}
