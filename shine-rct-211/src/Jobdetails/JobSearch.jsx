import React from 'react'
import { Input,Stack} from '@chakra-ui/react'
import styles from "./JobSearch.module.css"

const JobSearch = () => {
  return (
    <div >
      <h1 className={styles.dream}>Search Your Dream Job</h1>
      <div >
        <Stack className={styles.input}  spacing={3}>
           <Input variant='filled' placeholder='skills' />
           <Input  variant='filled' placeholder='location' />
           <Input  variant='filled' placeholder='experiance' />
           <Input  variant='filled' placeholder='salary' />
           <Input  variant='filled' placeholder='department' />
           <Input  variant='filled' placeholder='industry' />
       </Stack>
       </div>
       <button className={styles.jobsearch}>Job Search</button>
      
    </div>
  )
}

export default JobSearch