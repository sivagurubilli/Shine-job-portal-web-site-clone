import { HStack,Flex,Box,Text } from '@chakra-ui/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'


const data = [
  {
    title: "Seamless Experience",
    star: 4,
    date: "30 Jul, 2020",
    description: "It helped me get more calls from recruiters and in landing a job.",
    author:"Abhishek Gupta"
  },
  {
    title: "Had Good Experience",
    star: 5,
    date: "02 Jan, 2021",
    description: "It helped me get more shortlist from the recruiters. I had an amazing experience. Their support team is always there to help. Thanks for this support.",
    author:"Vinod Kumar"
  },
  {
    title: "Amazing experience",
    author:"Joseph Vargh",
    star: 4,
    date: "08 Nov, 2020",
    description:"I had a good experience using this service. I got more calls from recruiters which landed me in my dream job. For any queries, Shine's customer."
  }
]
export const ReviewCard = () => {

  return (
    <Flex w="80%" margin="auto" gap="5%" >
      {data?.map((e) => (
        <Box className="jd_container" w={["80%","35%"]} h="200px" overflow={"scroll"}>
          <Text as="h3" fontWeight={"bold"}>{e.title}</Text>
          <HStack gap="2%"><Flex color={"orange"} alignItems="baseline"><Text color="black">{e.star}</Text> <FaStar size={12} /></Flex> <Text as="p">{e.date}</Text></HStack>
          <Text>{e.description}</Text>
          <Text textAlign="right">{e.author}</Text>
         </Box>
       ))}
    </Flex>
  )
}
