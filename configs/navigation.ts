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
    route: ROUTES.MAIN,
  },
  {
    icon: HiReceiptTax,
    label: 'Promo',
    route: ROUTES.PROMO,
  },
  {
    icon: HiSearch,
    label: 'Pencarian',
    route: ROUTES.SEARCH,
  },
  {
    icon: HiClipboardList,
    label: 'Transaksi',
    route: ROUTES.TRANSACTIONS,
  },
  {
    icon: HiUser,
    label: 'Akun',
    route: ROUTES.PROFILE,
  },
]
