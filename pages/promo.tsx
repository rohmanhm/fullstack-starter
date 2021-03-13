import { Container } from '@chakra-ui/react'
import { withNavigation } from 'components/Navigation'

const PromoPage = () => {
  return <Container maxW="container.md">Hi, this is the promo page</Container>
}

export default withNavigation(PromoPage)
