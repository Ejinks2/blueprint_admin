import { Box, Container, Spinner } from '@chakra-ui/react'

function App (): JSX.Element {
  return (
    <div style={{ height: '100vh' }}>
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
    </div>
  )
}

export default App
