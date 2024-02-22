import { Container } from '@chakra-ui/react'
import TableDashboard from '../components/TableDashboard'

function HomePage (): JSX.Element {
  return (
        <div>
            <Container>
                <TableDashboard />
            </Container>
        </div>
  )
}

export default HomePage
