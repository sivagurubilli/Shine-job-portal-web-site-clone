import React from 'react';
import { Box, Button, Flex, ListItem, Text, List, Link } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetails } from '../Redux/SinglePage/action';
import {JobDetailsCard} from "../Components/JobDetails/JobDetailsCard"

export const JobDetailsPage = () => {
    
    const dispatch = useDispatch();
    const jobDetails = useSelector(state => state.jobReducer.jobDetails);
    useEffect(() => {
        dispatch(getJobDetails("62d93d3a9eabc9206b7a5d0a"));
    }, [dispatch]);
  
  
  return (
    < Box w="90%" margin="auto">

      {/* details card */}
      <JobDetailsCard jobDetails={jobDetails} />
      
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

        <Text>Profile Requirement :</Text>
        <List>
        {jobDetails.qualifications?.map((e) => (
          <ListItem key={e}>- {e}</ListItem>
        ))}
        </List>
        <br></br>
        
        <Text>Roles and responsibilities :</Text>
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
        {jobDetails.education ? <Flex gap={["13.5%", "11%"]}>
          <Text>Education </Text>
          <Link color="blue">{jobDetails.education}</Link>
        </Flex>
          : ""}

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