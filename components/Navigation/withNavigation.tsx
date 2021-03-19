import { ComponentType, FC } from 'react'
import Navigation from './Navigation'

export const withNavigation = (Component: ComponentType) => {
  const enhanced: FC = (props) => {
    return (
      <>
        <Component {...props} />
        <Navigation />
      </>
    )
  }

  enhanced.displayName = 'WithNavigation'

  return enhanced
}
