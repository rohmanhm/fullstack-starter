import { NAVIGATION_MENU } from '@/configs'
import { Container, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { NavigationMenu } from './NavigationMenu'

const Navigation: FC = () => {
  const router = useRouter()
  return (
    <Flex
      w="100%"
      position="fixed"
      bottom="0"
      left="0"
      borderTop="1px solid"
      borderColor={mode('gray.200', 'gray.600')}
      color="gray.500"
    >
      <Container maxW="container.md" display="inline-flex" px="0">
        {NAVIGATION_MENU.map((menu, i) => (
          <NavigationMenu
            key={i}
            isActive={menu.route === router.pathname}
            {...menu}
          />
        ))}
      </Container>
    </Flex>
  )
}

export default Navigation
