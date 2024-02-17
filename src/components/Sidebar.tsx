import { Box, Flex, HStack, VStack, Button, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

function Sidebar (): JSX.Element {
  const [hidden, setHidden] = useState(false)

  return (
    <>
      <motion.nav
        initial={hidden}
        animate={{ width: hidden ? 0 : '300px' }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <Flex width="100%" height="100%" backgroundColor="blue.500" direction="column" justifyContent="space-between" color="white">
          <Box>
            <HStack padding="16px">
              <Image src='' alt="Blueprint Logo" boxSize="100px"></Image>
              <Text fontSize="4xl">Blueprint</Text>
            </HStack>
            <VStack paddingX="8px" spacing="15px" align="left">
              <Button colorScheme="whiteAlpha" padding="8px" justifyContent="start" backgroundColor="transparent" variant="solid">Home</Button>
              <Button colorScheme="whiteAlpha" padding="8px" justifyContent="start" backgroundColor="transparent" variant="solid">Dashboard</Button>
              <Button colorScheme="whiteAlpha" padding="8px" justifyContent="start" backgroundColor="transparent" variant="solid">Blog</Button>
            </VStack>
          </Box>
          <Box>
            <Box paddingX="8px">
              <Button onClick={() => { setHidden(!hidden) }} width="100%" colorScheme="whiteAlpha" padding="8px" justifyContent="start" backgroundColor="transparent" variant="solid">Collapse</Button>
            </Box>
            <HStack padding="16px">
              <Image boxSize="50px" borderRadius="full" src='' alt="User Image"></Image>
              <Flex direction="column">
                <Text fontSize="md">John Doe</Text>
                <Text fontSize="md">jdoe@stevensblueprint.com</Text>
              </Flex>
            </HStack>
          </Box>
        </Flex>
      </motion.nav>
      <Button onClick={() => { setHidden(!hidden) }}>Toggle</Button>
    </>
  )
}

export default Sidebar
