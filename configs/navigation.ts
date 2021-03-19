import { IconType } from 'react-icons'
import {
  HiClipboardList,
  HiCollection,
  HiReceiptTax,
  HiSearch,
  HiUser,
} from 'react-icons/hi'
import { ROUTES } from './routes'

interface NavigationMenuItem {
  icon: IconType
  label: string
  pathname: string
  activeCondition?: (pathname: string) => boolean
}
export const NAVIGATION_MENU: NavigationMenuItem[] = [
  {
    icon: HiCollection,
    label: 'Menu',
    pathname: ROUTES.MAIN,
  },
  {
    icon: HiReceiptTax,
    label: 'Promo',
    pathname: ROUTES.PROMO,
  },
  {
    icon: HiSearch,
    label: 'Pencarian',
    pathname: ROUTES.SEARCH,
  },
  {
    icon: HiClipboardList,
    label: 'Transaksi',
    pathname: ROUTES.TRANSACTIONS,
  },
  {
    icon: HiUser,
    label: 'Akun',
    pathname: ROUTES.PROFILE,
    activeCondition: (pathname) =>
      [ROUTES.PROFILE, '/login'].includes(pathname),
  },
]
