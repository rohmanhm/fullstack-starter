import { withNavigation } from '@/components/Navigation'
import { Container } from '@chakra-ui/react'

const ProfilePage = () => {
  return <Container maxW="container.md">Hi, this is the profile page</Container>
}

export default withNavigation(ProfilePage)
