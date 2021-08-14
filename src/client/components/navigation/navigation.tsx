import { Container, Flex, useColorModeValue as mode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { NavigationMenu } from './menu'

export const NAVIGATION_MENU_TEST_ID = 'navigation-menu'

export interface NavigationMenuItem {
  icon: IconType
  label: string
  pathname: string
  activeCondition?: (pathname: string) => boolean
}

export type NavigationProps = {
  items?: NavigationMenuItem[]
}

const Navigation: FC<NavigationProps> = ({ items }) => {
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
        {items?.map(({ activeCondition, ...item }) => (
          <NavigationMenu
            data-testid={NAVIGATION_MENU_TEST_ID}
            key={`${item.pathname}-${item.label}`}
            isActive={
              activeCondition?.(router.pathname) ||
              item.pathname === router.pathname
            }
            {...item}
          />
        ))}
      </Container>
    </Flex>
  )
}

export default Navigation
