import { withNavigation } from '@/client/components/navigation'
import { Box, Button, Container, Heading, Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/client'
import NextLink from 'next/link'
import { useCallback } from 'react'

const ProfilePage: NextPage = () => {
  const [session] = useSession()
  const user = session?.user

  const handleLogout = useCallback(async () => {
    await signOut()
    window.location.href = '/login'
  }, [])

  return (
    <Container maxW="container.md">
      <Box p={5}>
        {session && (
          <>
            <Heading>Hi, {user?.email}</Heading>
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
