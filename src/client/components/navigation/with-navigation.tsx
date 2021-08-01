import { NAVIGATION_MENU } from '@/client/configs'
import { ComponentType, FC } from 'react'
import Navigation from './navigation'

export const withNavigation = (Component: ComponentType) => {
  const enhanced: FC = (props) => {
    return (
      <>
        <Component {...props} />
        <Navigation items={NAVIGATION_MENU} />
      </>
    )
  }

  enhanced.displayName = 'WithNavigation'

  return enhanced
}
