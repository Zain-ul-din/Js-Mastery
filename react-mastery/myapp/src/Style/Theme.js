
import { createContext } from "react"
/// use context
// - create context
// - provide it Context.Provider
// - set it using react.useState method

export const theme = {
    dark : {} , 
    light : {}
} 

export const themeContext = createContext(theme)
