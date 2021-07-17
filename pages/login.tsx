import { withNavigation } from '@/components/Navigation'
import { TopbarVariant, withTopbar } from '@/components/Topbar'
import { IS_DEV } from '@/configs'
import { firebaseClient } from '@/libs/firebase-client'
import { mustUnauth } from '@/libs/ssg-middleware'
import { Box, Button, Container, Icon, Text } from '@chakra-ui/react'
import { compose } from 'lodash/fp'
import { useCallback } from 'react'
import { FaGoogle } from 'react-icons/fa'

export const getServerSideProps = mustUnauth()

const LoginPage = () => {
  // const { register } = useForm<FormLogin>({
  //   defaultValues: {
  //     username: '',
  //     password: '',
  //   },
  // })
  const handleLoginWithGoogle = useCallback(async () => {
    try {
      await firebaseClient
        .auth()
        .signInWithPopup(new firebaseClient.auth.GoogleAuthProvider())
      window.location.href = '/'
    } catch (err) {
      if (IS_DEV) {
        console.error('unable to sign in with google: ', err)
      }
      throw err
    }
  }, [])

  // const handleLoginWithEmailPassword = useCallback(async () => {
  //   try {
  //     await firebaseClient.auth().signInWithEmailAndPassword('', '')
  //     window.location.href = '/'
  //   } catch (err) {
  //     if (IS_DEV) {
  //       console.error('unable to sign in with email and password: ', err)
  //     }
  //     throw err
  //   }
  // }, [])

  return (
    <Container
      maxW="container.md"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box as="form" w="100%">
        {/* <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl mt="4" id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" />
        </FormControl>
        <FormControl mt="4" textAlign="right">
          <Button colorScheme="primary">Masuk</Button>
        </FormControl> */}
      </Box>
      <Button
        onClick={handleLoginWithGoogle}
        m={5}
        colorScheme="blue"
        variant="solid"
      >
        <Icon as={FaGoogle} mr={3} />
        <Text>Lanjutkan dengan Google</Text>
      </Button>
    </Container>
  )
}

export default compose(
  withTopbar({ variant: TopbarVariant.WITH_BACK, title: 'Masuk ke akun' }),
  withNavigation
)(LoginPage)
