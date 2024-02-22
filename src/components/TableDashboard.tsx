import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Td,
  Tbody
} from '@chakra-ui/react'
import { getAllUsers } from '../api/lib/users'
import { useEffect, useState } from 'react'
import { type User } from '../types'

function TableDashboard (): JSX.Element {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await getAllUsers()
        if (response.data) {
          setUsers(response.data as User[])
        }
      } catch (error) {
        console.error('Error fetching users: ', error)
      }
    }
    void fetchUsers()
  }, [])

  return (
    <TableContainer>
        <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Title</Th>
                    <Th>Status</Th>
                </Tr>
            </Thead>
            <Tbody>
                    {users.map((user, index) => (
                    <Tr key={index}>
                    <Td>{user.displayName}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                    <Td>{user.enabled}</Td>
                    </Tr>
                    ))}
            </Tbody>
        </Table>
    </TableContainer>
  )
}

export default TableDashboard
