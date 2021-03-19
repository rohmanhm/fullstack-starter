import { Flex, Heading, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import Topbar from './Topbar'

export type TopbarWithBackProps = {
  title?: string
  onClickBack?: () => void
}
export const TopbarWithBack: FC<TopbarWithBackProps> = ({
  onClickBack,
  title,
}) => {
  const router = useRouter()
  return (
    <Topbar>
      <Flex
        onClick={onClickBack || router.back}
        className="topbar-left"
        alignItems="center"
        py="4"
        cursor="pointer"
      >
        <Icon as={HiArrowLeft} h={5} w={5} />
      </Flex>

      {title && (
        <Flex alignItems="center" ml="4">
          <Heading as="h3" size="sm">
            {title}
          </Heading>
        </Flex>
      )}
    </Topbar>
  )
}
