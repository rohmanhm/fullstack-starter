import {
  As,
  Flex,
  Icon,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'

export const NavigationMenu: FC<{
  icon: As
  label: string
  isActive?: boolean
  pathname?: string
}> = ({ label, icon, pathname, isActive }) => {
  return (
    <NextLink href={pathname || '#'}>
      <Flex
        as="a"
        flex="1"
        flexDirection="column"
        alignItems="center"
        p="3"
        cursor="pointer"
      >
        <Icon
          as={icon}
          w="5"
          h="5"
          color={isActive ? 'secondary.500' : 'gray.400'}
        />
        <Text
          fontWeight="bold"
          fontSize="xs"
          color={isActive ? mode('black', 'white') : 'gray.400'}
        >
          {label}
        </Text>
      </Flex>
    </NextLink>
  )
}
