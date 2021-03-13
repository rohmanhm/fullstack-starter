import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import theme from 'theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
