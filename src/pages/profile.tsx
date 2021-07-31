import { withNavigation } from '@/client/components/navigation'
import { Box, Button, Container, Heading, Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useCallback } from 'react'

const user = { name: 'mock user' }

const ProfilePage: NextPage = () => {
  const handleLogout = useCallback(async () => {
    window.location.href = '/login'
  }, [])

  return (
    <Container maxW="container.md">
      <Box p={5}>
        {user && (
          <>
            <Heading>Hi, {user?.name}</Heading>
            <Button onClick={handleLogout} mt={4}>
              Keluar
            </Button>
          </>
        )}

        {!user && (
          <NextLink href="/login" passHref>
            <Button as={Link} mt={4}>
              Masuk ke akun
            </Button>
          </NextLink>
        )}
      </Box>
    </Container>
  )
}

export default withNavigation(ProfilePage)