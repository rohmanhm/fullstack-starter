import { Box } from '@chakra-ui/react'
import { ComponentType, FC, useMemo } from 'react'
import Topbar from './topbar'
import { TopbarWithBack } from './with-back'

export enum TopbarVariant {
  DEFAULT,
  WITH_BACK,
}
export const withTopbar =
  (
    options: {
      variant?: TopbarVariant
      [key: string]: any
    } = {}
  ) =>
  (Component: ComponentType) => {
    const { variant, ...otherProps } = options

    const Enhanced: FC = (props) => {
      const TopbarComponent = useMemo(() => {
        switch (variant) {
          case TopbarVariant.WITH_BACK:
            return TopbarWithBack
          default:
            return Topbar
        }
      }, [])

      return (
        <>
          <TopbarComponent {...otherProps} />
          <Box pt="16">
            <Component {...props} />
          </Box>
        </>
      )
    }

    Enhanced.displayName = 'WithTopbar'

    return Enhanced
  }
