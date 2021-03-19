import { withNavigation } from '@/components/Navigation'
import { mustAuth } from '@/libs/ssg-middleware'
import { Container } from '@chakra-ui/react'

export const getServerSideProps = mustAuth()

const TransactionsPage = () => {
  return (
    <Container maxW="container.md">Hi, this is the transactions page</Container>
  )
}

export default withNavigation(TransactionsPage)
