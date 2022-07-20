import { Box, Button, HStack, Icon, Text,ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { FaBriefcase, FaShareSquare } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'

export const JobDetailsCard = ({jobDetails}) => {
  // const date = ((jobDetails?.publish_date).split("-"))[0];
  // const today = new Date().getDate();
  // const diff=today-date;
  // console.log(date, today, diff);
  // var dayStr;
  // useEffect(() => {
  //   if (diff === 0 || diff === 1) dayStr = `${diff} day`
  //   else if(diff>1 && diff <8) dayStr=`${diff} days`
  // },[])
  

  return ( 
    <Box  margin={"2% 0"} padding={"2%"} textAlign={"start"} bgColor="#f3fbfd" lineHeight={2.5} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <HStack justifyContent={"space-between"}>
          <Text as={"p"}>Hot</Text>
          <Text as={"p"}>
            {/* {((date - publishDate) < 0) ? 0 : (date - publishDate)} */}
            {jobDetails.id} days ago
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
  )
}

const style = {
    width: "25px",
    height: "6px",
    border: "2px solid gray",
    borderRadius: "10px",
    marginRight:"5px"
  }