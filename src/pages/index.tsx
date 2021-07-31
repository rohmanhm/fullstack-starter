import { withNavigation } from '@/client/components/navigation'
import { Button, Container, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Container maxW="container.md">
      <Head>
        <title>Hello World</title>
      </Head>
      <Button m={5} colorScheme="secondary" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </Container>
  )
}

export default withNavigation(IndexPage)
