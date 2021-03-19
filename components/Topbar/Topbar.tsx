import { Container, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import { FC } from 'react'

const Topbar: FC = ({ children }) => {
  return (
    <Flex
      w="100%"
      position="fixed"
      top="0"
      left="0"
      borderBottom="1px solid"
      borderColor={mode('gray.200', 'gray.600')}
    >
      <Container maxW="container.md">
        <Flex className="topbar-main">{children}</Flex>
      </Container>
    </Flex>
  )
}

export default Topbar
