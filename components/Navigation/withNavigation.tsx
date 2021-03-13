import { ComponentType, FC } from 'react'
import Navigation from './Navigation'

export const withNavigation = (Component: ComponentType) => {
  const enhanced: FC = () => {
    return (
      <>
        <Component />
        <Navigation />
      </>
    )
  }

  enhanced.displayName = 'WithNavigation'

  return enhanced
}
