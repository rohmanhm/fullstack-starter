import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})

const colors = {
  primary: {
    '50': '#fce8e5',
    '100': '#ffcab7',
    '200': '#ffa788',
    '300': '#ff8458',
    '400': '#ff6832',
    '500': '#ff4d00',
    '600': '#f44600',
    '700': '#e63f00',
    '800': '#d93700',
    '900': '#c12700',
  },
  secondary: {
    '50': '#fef7e1',
    '100': '#fceab2',
    '200': '#f9dd80',
    '300': '#f7d14d',
    '400': '#f6c525',
    '500': '#f5bc00',
    '600': '#f5ae00',
    '700': '#f59c00',
    '800': '#f58b00',
    '900': '#f56c00',
  },
}

const theme = extendTheme({
  colors,
  config: { initialColorMode: 'dark' },
  breakpoints,
})

export default theme
