import { Container, HStack } from '@chakra-ui/react'
import TableDashboard from '../components/TableDashboard'
import Sidebar from '../components/Sidebar'
import SampleTableDashboard from '../components/SampleTableDashboard'

function HomePage (): JSX.Element {
  return (
    <HStack height="100vh" spacing="0">
      <Sidebar />
      <Container>
        <SampleTableDashboard />
        <TableDashboard />
      </Container>
    </HStack>
  )
}

export default HomePage
