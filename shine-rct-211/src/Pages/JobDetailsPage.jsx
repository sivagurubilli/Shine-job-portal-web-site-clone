import React from 'react'
import {Box,Button,DrawerHeader,Flex,HStack,Icon,ListItem,Spacer,Stack,Text, useMediaQuery, VStack, List, Link, Table, TableCaption, Tbody, Thead, Tr,Th,Td} from "@chakra-ui/react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobDetails } from '../Redux/SinglePage/action'
import { FaBriefcase, FaGripLines, FaShareSquare } from "react-icons/fa"
import { GrLocation } from "react-icons/gr";
import { JobDetailsCard } from '../Components/JobDetailsCard'

export const JobDetailsPage = () => {
    
    const dispatch = useDispatch();
    const jobDetails = useSelector(state => state.jobReducer.jobDetails);
    useEffect(() => {
        dispatch(getJobDetails(2));
    }, [dispatch]);
  // const publishDate = (jobDetails?.publish_date).split("-")[0] ||0;


  // const smallerScreen = useMediaQuery('(min-width: 1280px)');
  // console.log(smallerScreen)
  
  const date = new Date().getDate();
  return (
    < Box w="90%" margin="auto">

      {/* details card */}
      <Box  margin={"2% 0"} padding={"2%"} textAlign={"start"} bgColor="#f3fbfd" lineHeight={2.5} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HStack justifyContent={"space-between"}>
          <Text as={"p"}>Hot</Text>
          <Text as={"p"}>
            {/* {((date - publishDate) < 0) ? 0 : (date - publishDate)} */}
            0 days ago
          </Text>
        </HStack>
      <Text as={"h3"} fontWeight={700} fontSize={"26px"}>{jobDetails.title}</Text>
      <Text as={"h3"} >{jobDetails.company_name}</Text>
      <HStack>
        <HStack>
          <GrLocation/>
          <Text>{jobDetails.location}</Text>
        </HStack>
        <HStack>
            {/* icon */}
           <FaBriefcase/>
          <Text>{jobDetails.experience}</Text>
        </HStack>
        </HStack>
        <HStack>
          <Icon viewBox='0 0 300 270' color='gray.300'>
           <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
          </Icon>
          <Text>{jobDetails.job_type}</Text>
        </HStack>

        <HStack justifyContent={["space-evenly", "space-between"]}>
          
          <Button colorScheme={"blue"} variant={"ghost"}>Apply</Button>

          <HStack justifyContent="space-evenly" alignContent="baseline">
            <Box bgColor={"white"} width={["50px",'80px']} padding="5% 0% 0% 2%">
              <Stack direction={["column","row"]} alignItems="baseline" gap={["0px","2%"]}>
                <FaShareSquare />
                <Text>Share</Text>
              </Stack>
            </Box>
            
            <Box bgColor={"white"} width={["120px",'150px']} padding="5% 0% 0% 2%">
            <Stack direction={["column","row"]} alignItems="center" gap={["0px","2%"]}>
                <Stack>
                  <Box style={style}></Box>
                  <Box style={style}></Box>
                </Stack>
                <Text>Similar Jobs</Text>
              </Stack>
            </Box>

          </HStack>

        </HStack> 
      </Box> 
      {/* <JobDetailsCard {...jobDetails} /> */}
      
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
          <ListItem>- {e}</ListItem>
        ))}
        </List>
        <br></br>
        
        <Text>Roles and responsibilities :</Text>
        <List>
        {jobDetails.roles_responsibilities?.map((e) => (
          <ListItem>- {e}</ListItem>
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
        <Flex gap={["13.5%","11%"]}>
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

      </Box>
    </Box>
  )
}

const style = {
  width: "25px",
  height: "6px",
  border: "2px solid gray",
  borderRadius: "10px",
  marginRight:"5px"
}