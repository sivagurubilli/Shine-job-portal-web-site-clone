import React, { useState,useEffect } from 'react';
import { Box, Button, Flex, ListItem, Text, List, Grid,Link,GridItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetails, homeJobDetails } from '../Redux/SinglePage/action';
import { JobDetailsCard } from "../Components/JobDetails/JobDetailsCard";
import { useParams,Link as RouterLink } from "react-router-dom";
import { JobFilter } from '../Components/JobDetails/JobFilter';
import {MyCarousel } from '../Components/JobDetails/Carousel'


export const JobDetailsPage = ()=> {
  const { id } = useParams();
    const dispatch = useDispatch();
  const jobDetails = useSelector(state => state.jobReducer.jobDetails);


    useEffect(() => {
    dispatch(getJobDetails(id))

  }, [dispatch,id]);

  
  
  return (
    < Box w="90%" margin="auto">
      {/* details card */}
      <JobDetailsCard jobDetails={jobDetails} bColor="#f3fbfd"/>
      
      {/* nav bar */}
      <Flex justifyContent={"space-evenly"}>
        <Button variant={"link"}>Job Details</Button>
        <Button variant={"link"}>Key Skills</Button>
        <Button variant={"link"}>Recruiter Details</Button>
        <Button variant={"link"}>Company Details</Button>
      </Flex>
  
      {/* job details div */}
      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="start"
        margin="2% auto" padding="2%" >
        <Text as="h3"fontWeight={700} fontSize={"20px"}>Job Details</Text>
        <br></br>
        
        <Text>{jobDetails.title}</Text>
        <br></br>
        {(jobDetails.roles_responsibilities) ?
          <Text>Profile Requirement :</Text> : ""}
        <List>
        {jobDetails.qualifications?.map((e) => (
          <ListItem key={e}>- {e}</ListItem>
        ))}
        </List>
        <br></br>
        {(jobDetails.roles_responsibilities)?
        <Text>Roles and responsibilities :</Text>: ""}
        <List>
        {jobDetails.roles_responsibilities?.map((e) => (
          <ListItem key={e}>- {e}</ListItem>
        ))}
        </List>
          
        <br></br>
        
        <Text>Other Details :</Text>
        <Flex gap="10%">
          <Text>Department </Text>
          <Link color="blue">{jobDetails.department}</Link>
        </Flex>
        <Flex gap={["16.5%","12%"]}>
          <Text>Industry</Text>
          <Link color="blue">{jobDetails.industry}</Link>
        </Flex>
       <Flex gap={["13.5%", "11%"]}>
          <Text>Education </Text>
          <Link color="blue">{jobDetails.education}</Link>
        </Flex>
          

        {/* <Table variant="unstyled" lineHeight="shorter" width="50%" maxHeight="10px" border="1px solid red">
          <Thead>
            <Tr><Td>Other Details :</Td><Th></Th></Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Department</Td>
            <Td color="blue">hi</Td>
            </Tr><Tr>
              <Td>Industry IT</Td>
            <Td color="blue">hi</Td>
            </Tr><Tr>
              <Td>Education</Td>
            <Td color="blue">hi</Td>
            </Tr>
          </Tbody>
        </Table> */}

        {/* key skills div */}
      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="start"
        margin="2% auto" padding="2%" >
        <Text as="h3" fontSize={"20px"} fontWeight={700}>Key Skills</Text>
        <Flex flexDirection={`row`} flexWrap='wrap' gap={'5px'}>
        {jobDetails?.skills?.map((item,index)=>(
          // <>
            <Button variant={"outline"} key={item}>{item}</Button> 
          // </>
        ))}
        </Flex>
      </Box>

      {/* recruiter details div */}
      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="start"
        margin="2% auto" padding="2%" >
      <Text as="h3" fontSize={"20px"} fontWeight={700}>Recruiter Details</Text>
      <Text as="h5" fontSize={"16px"} fontWeight={500}>{jobDetails.title}</Text> 
      <Text>{jobDetails.location} </Text>
      <br></br>

      <Text>hidden_email</Text> 
      <Text>hidden_mobile</Text>   
      <Flex justifyContent={"space-between"}>
        <Link>View Contact</Link>
        <Link>Show all Jobs by this Recruiter</Link>
      </Flex>
     </Box>

     {/* notice div */}
     <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="start"
        margin="2% auto" padding="2%" >
          <Flex>
            {/* pagesearch icon */}
            <RouterLink to="/application-highlighter">Get your Application Noticed</RouterLink>
            {/* arrow icon */}
          </Flex>
      </Box>

      {/* simliar jobs search */}
      <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="start"
        margin="2% auto" padding="2%" >
          <Text as="h3" fontSize={"20px"} fontWeight={700}>Similar Jobs</Text>
          {/* <Flex>
            {filterData?.map((e) => (
              <JobDetailsCard jobDetails={e}/>
            ))}
          </Flex> */}
          <JobFilter jobDetails={jobDetails}/>
      {/* <MyCarousel/> */}
      </Box>

      </Box>
    </Box>
  )
}

{/*const style = {
  width: "25px",
  height: "6px",
  border: "2px solid gray",
  borderRadius: "10px",
  marginRight:"5px"
}
*/}