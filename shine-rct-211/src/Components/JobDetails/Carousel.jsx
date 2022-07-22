
// https://www.npmjs.com/package/react-responsive-carousel
import { Box, Flex, Grid, GridItem, SimpleGrid,Button } from '@chakra-ui/react';
import axios from 'axios';
import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import  {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { JobDetailsCard } from './JobDetailsCard';

export const MyCarousel = ()=>{

    const [data, setData] = useState([]);
    const handleOpen = (id) => {
        window.open(`http://localhost:3000/jobDetails/${id}`);
    };
    useEffect(() => {
        axios.get("https://shine-jobs.herokuapp.com/jobDetails").then((res) => setData(res.data))
    }, []);
    console.log(data,"coa")
    return (
        <Box border="1px solid red" w="90%">
         <Carousel width="30%" infiniteLoop="true" swipeable centerMode> 
        {/* <SimpleGrid gridTemplateColumns={`repeat(3,auto)`} gap="5%"> */}
           
                {data?.map((e) => (
                    <Box  key={e.id}>
                        <JobDetailsCard jobDetails={e}/>
                        <Button onClick={()=>handleOpen(e._id)}>Open</Button>
                    </Box>
                ))}
            
        {/* </SimpleGrid > */}
             </Carousel> 
        </Box>
        );
    }

