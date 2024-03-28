import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react'
import { type User } from '../types/index'
import React from 'react'

function TableDashboard ({ members }: { members: User[] }): JSX.Element {
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
            .sort((a: User, b: User) => {
              return a.displayName.localeCompare(b.displayName)
            }).filter((user: User) => !user.enabled)
            .map(({ displayName, email, enabled }: User) => // Add type annotation for User
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
