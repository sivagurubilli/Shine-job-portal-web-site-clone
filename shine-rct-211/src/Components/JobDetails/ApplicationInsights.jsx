import React from 'react'
import {TableContainer,Table,Thead,Tbody,Th,Tr,Td} from "@chakra-ui/react";
export const ApplicationInsights = () => {
  return (
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th></Th>
        <Th>Without</Th>
        <Th>With</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Highlight your application to recruiter</Td>
        <Td><List><ListItem ><List><ListItem></Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>Get Upto 10X attention from recruiters</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>Profile is tagged as Priority applicant</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>Increase your chance of shortlisting</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>Active support from our customer service team</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td>Guaranteed job</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
  )
}
