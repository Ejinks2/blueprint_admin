import { Container, HStack } from '@chakra-ui/react'
import TableDashboard from '../components/TableDashboard'
import Sidebar from '../components/Sidebar'

function HomePage (): JSX.Element {
  return (
    <HStack height="100vh" spacing="0">
      <Sidebar />
      <Container>
        <TableDashboard />
      </Container>
    </HStack>
  )
}

export default HomePage
