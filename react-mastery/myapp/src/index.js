import React, { useState }  from 'react'
import ReactDOM from 'react-dom/client'
import { theme , themeContext } from './Style/Theme'
import { useLocalStorage } from './Hooks/CustomHooks'

import './Style/bootstrap.min.css'
import './Style/index.css'
import Header from './Components/Header'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App () {
    const [ getTheme , setTheme ] = useLocalStorage('theme')
    const [ uiThemeContext , setUiThemeContext] = useState(getTheme() ? getTheme() : theme.light) 
    
    return ( <themeContext.Provider value = {{uiThemeContext , setUiThemeContext}}> <Header/> </themeContext.Provider> )
}

root.render (<App/>)

