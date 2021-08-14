import { withNavigation } from '@/client/components/navigation'
import { TopbarVariant, withTopbar } from '@/client/components/topbar'
import { Box, Button, Container, Icon, Text } from '@chakra-ui/react'
import { compose } from 'lodash/fp'
import { signIn } from 'next-auth/client'
import { FaGoogle } from 'react-icons/fa'

const LoginPage = () => {
  // const { register } = useForm<FormLogin>({
  //   defaultValues: {
  //     username: '',
  //     password: '',
  //   },
  // })
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
        onClick={() => signIn('google')}
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
