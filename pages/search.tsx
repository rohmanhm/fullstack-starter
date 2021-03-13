import { Container } from '@chakra-ui/react'
import { withNavigation } from 'components/Navigation'

const SearchPage = () => {
  return <Container maxW="container.md">Hi, this is the search page</Container>
}

export default withNavigation(SearchPage)
