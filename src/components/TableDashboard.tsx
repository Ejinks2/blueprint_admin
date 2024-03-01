import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import React from 'react'
import sampleUserData from '../sample_data.json'

function TableDashboard (): JSX.Element {
  const [sampleData] = React.useState(sampleUserData)

  return (
    <TableContainer>
      <Table variant="simple" size='md'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Title</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sampleData && Object.values(sampleData.Users)
            .sort((a, b) => {
              return a.Displayname.localeCompare(b.Displayname)
            }).filter((user) => !user.Disabled)
            .map(({ Displayname, Email, Disabled }) =>
              <Tr key={Email}>
                <Th>{Displayname}</Th>
                <Th>{Email}</Th>
                <Th></Th>
                <Th>{Disabled ? 'Inactive' : 'Active'}</Th>
              </Tr>
            )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableDashboard
