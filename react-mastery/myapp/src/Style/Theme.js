
import { createContext } from "react"
/// use context
// - create context
// - provide it Context.Provider
// - set it using react.useState method

export const theme = {
    dark : {
        text : 'text-light' ,
        bg : 'bg-dark'
    } , 
    light : {
        text : 'light' ,
        bg : 'light' 
    }
} 

export const themeContext = createContext(theme)
