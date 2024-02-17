import { Box, Container, Flex, Spinner } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

function App (): JSX.Element {
  return (
    <div style={{ height: '100vh' }}>
      <Flex height="100%">
        <Sidebar />
        <Container height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100px"
          >
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Box>
        </Container>
      </Flex>
    </div>
  )
}

export default App
