import { Container, HStack, Text } from '@chakra-ui/react'
import TableDashboard from '../components/TableDashboard'
import Sidebar from '../components/Sidebar'
import { getAllUsers } from '../api/lib/users'
import { type User } from '../types/index'
import React, { useEffect, useState } from 'react'

function HomePage (): JSX.Element {
  const [members, setMembers] = React.useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    void getAllUsers().then((response) => {
      setMembers(response.data as User[])
    }).catch((error) => {
      console.error(error)
      setError('Failed to load Blueprint members. Please try again later.')
    })
  }, [])

  return (
    <HStack height="100vh" spacing="0">
      <Sidebar />
      <Container>
        {error ? (<Text color="red.500">{error}</Text>) : (<TableDashboard members={members} />)}
      </Container>
    </HStack>
  )
}

export default HomePage
