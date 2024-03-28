import { Container, HStack } from '@chakra-ui/react'
import TableDashboard from '../components/TableDashboard'
import Sidebar from '../components/Sidebar'
import { getAllUsers } from '../api/lib/users'
import { type User } from '../types/index'
import React, { useEffect } from 'react'

function HomePage (): JSX.Element {
  const [members, setMembers] = React.useState<User[]>([])

  useEffect(() => {
    void getAllUsers().then((response) => {
      setMembers(response.data as User[])
    })
  }, [])

  return (
    <HStack height="100vh" spacing="0">
      <Sidebar />
      <Container>
        <TableDashboard members={members} />
      </Container>
    </HStack>
  )
}

export default HomePage
