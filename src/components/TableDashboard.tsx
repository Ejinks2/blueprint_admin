import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import { getAllUsers } from '../api/lib/users'
import { type User } from '../types/index'
import React from 'react'

function TableDashboard (): JSX.Element {
  const [members, setMembers] = React.useState<User[]>([])

  React.useEffect(() => {
    void getAllUsers().then((response) => {
      setMembers(response.data as User[])
    })
  }, [])

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
          {members
            .sort((a, b) => {
              return a.displayName.localeCompare(b.displayName)
            }).filter((user) => !user.enabled)
            .map(({ displayName, email, enabled }) =>
              <Tr key={email}>
                <Th>{displayName}</Th>
                <Th>{email}</Th>
                <Th></Th>
                <Th>{enabled ? 'Inactive' : 'Active'}</Th>
              </Tr>
            )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableDashboard
