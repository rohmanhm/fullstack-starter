import { Container } from '@chakra-ui/react'
import { withNavigation } from 'components/Navigation'

const TransactionsPage = () => {
  return (
    <Container maxW="container.md">Hi, this is the transactions page</Container>
  )
}

export default withNavigation(TransactionsPage)
