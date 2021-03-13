import { withNavigation } from '@/components/Navigation'
import { Button, Container, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

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
