import React , {  useState , useContext } from 'react'
import { useLocalStorage } from '../Hooks/CustomHooks'
import { theme , themeContext } from '../Style/Theme'

import { AiOutlineGithub } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
import {SiGithubsponsors} from 'react-icons/si'
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

    return (
        <>
            <div className='text-center  w-100'>
              <i className='react-icon fs-1 text-info'> <GrReactjs/> </i> <h2 className='fw-bold pt-2'>  REACT MASTERY  </h2>
            </div>
            <div className='text-center mt-3 fw-bold fs-4 '>
                <a className='text-decoration-none ' href='https://github.com/Zain-ul-din/Js-Mastery' target='_blank'>
                    <i >  <AiOutlineGithub/> </i> 
                </a>
                <a className='text-decoration-none px-2 ITransition cursor-pointer' onClick={OnLiked}>
                    <i className={likeState ? 'text-danger' : ''}>  <SiGithubsponsors/> </i> 
                </a>
                <a className='text-decoration-none' href = '#'>  
                   <MdDarkMode/> 
                </a>  
            </div>
        </>
    )
}
