// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    gray : {
      100 : '#F5f5f5' ,
      200 : '#EEEEEE' ,
      300 : '#E0E0E0' ,
      400 : '#BDBDBD' ,
      500 : '#718096' ,
      600 : '#757575' ,
      700 : '#2D3748' ,
      800 : '#0E172A', //'#424242' BG
      900 : '#212121'
    }
  }

// 3. extend the theme
const theme = extendTheme({  colors , config })
// const theme = extendTheme({  config  })

export default theme