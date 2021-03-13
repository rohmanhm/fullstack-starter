import { withNavigation } from '@/components/Navigation'
import { Container } from '@chakra-ui/react'

const SearchPage = () => {
  return <Container maxW="container.md">Hi, this is the search page</Container>
}

export default withNavigation(SearchPage)
