import React from 'react'
import { TableContainer, Table, Thead, Tbody, Th, Tr, Td, Text, Heading, Button, Stack, Image, Box, Flex, useBreakpointValue, Radio } from "@chakra-ui/react";
import "./jobDetails.css"
import { Link } from 'react-router-dom';
import { ReviewCard } from './ReviewCard';
import { BsCart2 } from "react-icons/bs"
import {BiPhoneCall} from "react-icons/bi"
import {RiNewspaperLine} from "react-icons/ri"

export const ApplicationInsights = () => {

  const data = [
    {title:"Highlight your application to recruiter",c1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU",c2:"https://e7.pngegg.com/pngimages/966/803/png-clipart-check-mark-tick-green-tick-mark-angle-leaf.png"},
    { title: "Get Upto 10X attention from recruiters", c1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", c2: "https://e7.pngegg.com/pngimages/966/803/png-clipart-check-mark-tick-green-tick-mark-angle-leaf.png" },
    { title: "Profile is tagged as Priority applicant", c1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", c2: "https://e7.pngegg.com/pngimages/966/803/png-clipart-check-mark-tick-green-tick-mark-angle-leaf.png" },
    { title: "Increase your chance of shortlisting", c1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", c2: "https://e7.pngegg.com/pngimages/966/803/png-clipart-check-mark-tick-green-tick-mark-angle-leaf.png" },
    { title: "Active support from our customer service team", c1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", c2: "https://e7.pngegg.com/pngimages/966/803/png-clipart-check-mark-tick-green-tick-mark-angle-leaf.png" },
    { title: "Guaranteed job", c1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", c2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZm91Q5lPkZSdutz4SZuUKKeOUXQlWKax5RQ&usqp=CAU", }
    
  ]
  return (
    <Box  margin="auto">
   {/* fitsr div */}
   <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} bgColor="#f3fbfd" w="100%">
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize='3xl'>
            <Text  as={'h3'}>
            Application Highlighter
            </Text>
          </Heading>
          <Text >
          With this service, you get higher views on your job applications at Shine. All of your job applications would be highlighted so as to catch the attention of the recruiter among 1000s of job applicants. Also, your job application will get up to 10 times more recruiter views which in turn increase your chances to get contacted by respective recruiters.

Making recruiter view your profile is the toughest and most difficult work for any individual since recruiter is able to view a maximum of 50 resumes in a day whereas the number of applicants is in thousands. To cover this challenge and help you in reaching out to the recruiter easily, shine.com  brings a service i.e. Application Highlighter. Priority Applicant service will make it easier in highlighting your profile to the recruiter of your choice. This service will ensure you do not miss out an opportunity to highlight your profile to the recruiter of your dream company or the best jobs available in the market. This service not only helps in highlighting your job profile but also increases your chances of getting contacted by recruiters.
          </Text>
        </Stack>
      </Flex>
      
            
      <Flex flex={1} align="center">
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://static1.shine.com/l/m/product_images/1643344475_8343.png'
          }
            h="75%"
        />
      </Flex>
    </Stack>

{/* application checkbox */}
      <Text fontSize="3xl" textAlign="left" pl={"10%"}>Why do you need Application Highlighter ?</Text>
    <Box className="jd_container" w="80%">
    <TableContainer>
  <Table variant='simple' size="sm">
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Without</Th>
        <Th>With</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((e,index) => (
        <Tr key={index}>
          <Td>{e.title}</Td>
          <Td><Image src={e.c1} w="15px"/></Td>
          <Td><Image src={e.c2} w="15px"/></Td>
        </Tr>
      ))}
    </Tbody>
    
    </Table>
      </TableContainer>
      </Box>
      
      {/* select days div */}
      <Box className="jd_container" w="80%" bgColor="#f3fbfd">
        <Text fontSixe="3xl" textAlign="left">Select Days</Text>
        <Flex direction="row" gap="5%" >
            <Box w="100px" p="2%" bg="white" textAlign={"center"}>
              <Radio defaultChecked></Radio>
            <Text>Rs 1699</Text>
            <Text>90 days</Text>
          </Box>
          <Box w="100px" p="2%" bg="white" textAlign={"center"}>
              <Radio defaultChecked></Radio>
              <Text>Rs 1699</Text>
              <Text>180 days</Text>
            </Box>
        </Flex>
      </Box>

      {/* how it works div */}
      <Flex direction="row" w="80%" gap="5%" margin="auto">
        <Link to="">How It Works</Link>
        <Link to="">Reviews</Link>
      </Flex>

      <Box className="jd_container" w="80%">
        <Text fontSize="3xl">How It Works</Text>
        <Flex direction={["column", "row"]}>
          <Flex direction={[ "row", "column"]}>
          <Box className="jd_hiwbox">
            <BsCart2/>
          </Box>
            <Box>
              <Text>Place Order</Text>
              <Text>Place order and upload your latest resume</Text>
            </Box>
          </Flex>
          <Flex direction={[ "column", "row"]}>
          <Box className="jd_hiwbox"><RiNewspaperLine/></Box>
            <Box>
              <Text>Application Highlighted</Text>
              <Text>Apply to jobs & stand out among other applicants through highlighting your job application</Text>
            </Box>
          </Flex>
          <Flex direction={[ "column", "row"]}>
          <Box className="jd_hiwbox"><BiPhoneCall/></Box>
            <Box>
              <Text>Get Interview Calls</Text>
              <Text>10X more chances to get a call from recruiter</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* reviews */}
      <Box className="jd_container" w="80%">
        <Text fontSize="3xl">Reviews</Text>
        <Flex direction={["row","column"]}>
           <ReviewCard/>
        </Flex>
      </Box>

    </Box>
  )
}