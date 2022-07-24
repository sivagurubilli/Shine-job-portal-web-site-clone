import { Box, Button, HStack, Icon, Text,ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { FaBriefcase} from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import {Link as RouteLink} from "react-router-dom"
export const HomeJobCard = ({ jobDetails, bColor = "white" }) => {
    
  const handleApply = () => {
    
  }
  return ( 
    <Box  margin={"2% 0"} padding={"2%"} textAlign={"start"} bgColor={bColor} lineHeight={2.5} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HStack justifyContent={"space-between"}>
          <Text as={"p"}>Hot</Text>
          <Text as={"p"}>
            {/* {((date - publishDate) < 0) ? 0 : (date - publishDate)} */}
          {/* {jobDetails.id} */}
          x days ago
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
          <UnorderedList><ListItem>{jobDetails.job_type}</ListItem></UnorderedList>

        <HStack justifyContent={"right"}>
       <RouteLink to="/final"><Button colorScheme={"blue"} variant={"ghost"}
        >Apply</Button></RouteLink>
        </HStack>
      </Box>
  )
}

const style11 = {
    width: "25px",
    height: "6px",
    border: "2px solid gray",
    borderRadius: "10px",
    marginRight:"5px"
  }
