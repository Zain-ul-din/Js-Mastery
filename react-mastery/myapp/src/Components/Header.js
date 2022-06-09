import React , {  useState , useContext } from 'react'
import { useLocalStorage } from '../Hooks/CustomHooks'
import { theme , themeContext } from '../Style/Theme'

import { AiOutlineGithub } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
import {SiGithubsponsors , SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'



// header
export default function Header () {

    const [ liked , setLike ] = useLocalStorage('like')  
    const [likeState , setLikeState] = useState(liked())
    const context = useContext(themeContext)
    
    function OnLiked () {
        setLike(!likeState)
        setLikeState(!likeState) 
    }

    function setTheme () 
    {  console.log('clicked');
       console.log(context.uiThemeContext , theme.light);
       if (context.uiThemeContext.text === theme.light.text)  context.setUiThemeContext(theme.dark) 
        else context.setUiThemeContext(theme.light) }
    

    return (
        <>
            <div className={`text-center ${context.uiThemeContext.bg}   w-100`}>
              <i className={`${context.uiThemeContext.text} react-icon fs-1 text-info`}> <GrReactjs/> </i> 
              <i className={`text-warning fs-1 fw-bold p-0 text-center`}><SiJavascript/></i>
              <h2 className={`fw-bold pt-2 ${context.uiThemeContext.text}`}>  REACT  MASTERY   </h2>
            </div>

            <div className={`text-center mt-3 fw-bold fs-4 ${context.uiThemeContext.bg} ${context.uiThemeContext.text}`}>
                <a className={`text-decoration-none ${context.uiThemeContext.text}`} href='https://github.com/Zain-ul-din/Js-Mastery' target='_blank'>
                    <i >  <AiOutlineGithub/> </i> 
                </a>
                <a className={`text-decoration-none px-2 ITransition cursor-pointer ${context.uiThemeContext.text}`} onClick={OnLiked}>
                    <i className={likeState ? 'text-danger' : ''}>  <SiGithubsponsors/> </i> 
                </a>
                <a className={`ITransition cursor-pointer text-decoration-none ${context.uiThemeContext.text}`} onClick={setTheme}>  
                   <MdDarkMode/> 
                </a>  
            </div>
        </>
    )
}
