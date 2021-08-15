import { withNavigation } from '@/client/components/navigation'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <Container maxW="container.md">
      <Head>
        <title>About page</title>
      </Head>
      Hi this is an about page
    </Container>
  )
}

export default withNavigation(AboutPage)
