import { HiCollection, HiUser } from 'react-icons/hi'
import { NavigationMenuItem } from '../components/navigation'
import { ROUTES } from './routes'

export const NAVIGATION_MENU: NavigationMenuItem[] = [
  {
    icon: HiCollection,
    label: 'Menu',
    pathname: ROUTES.MAIN,
  },
  {
    icon: HiUser,
    label: 'About',
    pathname: ROUTES.ABOUT,
  },
]
