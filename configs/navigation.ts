import {
  HiClipboardList,
  HiCollection,
  HiReceiptTax,
  HiSearch,
  HiUser,
} from 'react-icons/hi'
import { ROUTES } from './routes'

export const NAVIGATION_MENU = [
  {
    icon: HiCollection,
    label: 'Menu',
    route: '/',
  },
  {
    icon: HiReceiptTax,
    label: 'Promo',
    route: '/promo',
  },
  {
    icon: HiSearch,
    label: 'Pencarian',
    route: '/search',
  },
  {
    icon: HiClipboardList,
    label: 'Transaksi',
    route: '/transactions',
  },
  {
    icon: HiUser,
    label: 'Akun',
    route: ROUTES.PROFILE,
  },
]
