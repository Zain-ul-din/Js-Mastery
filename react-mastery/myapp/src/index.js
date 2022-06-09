import React, { useState , useEffect }  from 'react'
import ReactDOM from 'react-dom/client'
import { theme , themeContext } from './Style/Theme'
import { useLocalStorage } from './Hooks/CustomHooks'

import './Style/bootstrap.min.css'
import './Style/index.css'
import Header from './Components/Header'
import HooksDemo from './Components/HooksDemo'
import HooksRoute from './Components/HooksRoute'
import Footer from './Components/Footer'

// routing 

import { Routes , Route } from 'react-router-dom'

import UseReducerDemo  from './Components/Demo/UseReducerDemo'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App () {
    const [ getTheme , setTheme ] = useLocalStorage('theme')
    const [ uiThemeContext , setUiThemeContext ] = useState(getTheme() ? getTheme() : theme.dark) 
    
    useEffect(()=>{
        // document.querySelector(`body`).classList = document.querySelector(`body`).classList = []
        // document.querySelector(`body`).classList.add(uiThemeContext.bg)
        // setTheme(uiThemeContext)
    } , [uiThemeContext])
    
    return ( 
     <themeContext.Provider value = {{uiThemeContext , setUiThemeContext}}>
          {/*<Header/> 
          <HooksDemo/>
          <HooksRoute/>
          <Footer/> */}

          <UseReducerDemo/>

    
          
     </themeContext.Provider> 
    )
}

root.render (<App/>)

