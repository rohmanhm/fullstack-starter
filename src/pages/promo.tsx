import { withNavigation } from '@/client/components/navigation'
import { Container } from '@chakra-ui/react'

const PromoPage = () => {
  return <Container maxW="container.md">Hi, this is the promo page</Container>
}

export default withNavigation(PromoPage)
