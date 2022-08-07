// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import theme from '../lib/theme'
import {ColorModeScript} from '@chakra-ui/react'
import '../styles/globals.css'
import NavBar from "../components/NavBar"

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} ></ColorModeScript>
        <NavBar />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;