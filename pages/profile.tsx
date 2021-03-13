import { Container } from '@chakra-ui/react'
import { withNavigation } from 'components/Navigation'

const ProfilePage = () => {
  return <Container maxW="container.md">Hi, this is the profile page</Container>
}

export default withNavigation(ProfilePage)
