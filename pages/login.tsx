import { withNavigation } from '@/components/Navigation'
import { IS_DEV } from '@/configs'
import { firebaseClient } from '@/libs/firebase-client'
import { mustUnauth } from '@/libs/ssg-middleware'
import { Button, Container, Icon, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { FaGoogle } from 'react-icons/fa'

export const getServerSideProps = mustUnauth()

const LoginPage = () => {
  const handleLoginWithGoogle = useCallback(async () => {
    try {
      await firebaseClient
        .auth()
        .signInWithPopup(new firebaseClient.auth.GoogleAuthProvider())
      window.location.href = '/?a=true'
    } catch (err) {
      if (IS_DEV) {
        console.error('unable to sign in with google: ', err)
      }
      throw err
    }
  }, [])

  return (
    <Container
      maxW="container.md"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Button
        onClick={handleLoginWithGoogle}
        m={5}
        colorScheme="blue"
        variant="outline"
      >
        <Icon as={FaGoogle} mr={3} />
        <Text>Login with Google</Text>
      </Button>
    </Container>
  )
}

export default withNavigation(LoginPage)
