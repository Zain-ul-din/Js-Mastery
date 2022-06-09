
import React , {useContext} from "react"
import { themeContext } from "../Style/Theme"
import Typewriter from 'typewriter-effect'

import { ImPower } from 'react-icons/im'


export default function HooksDemo () {
    const context = useContext(themeContext)
    
    return (
        <>
            <div className={`text-center ${context.uiThemeContext.bg} `}>
             <h1 className={`text-center mt-5 fw-bold ${context.uiThemeContext.text}`}>REACT HOOKS</h1>   
             <h1 className="text-warning"><ImPower/></h1>
            </div>
            
            <div className={`text-center ${context.uiThemeContext.bg} `}>
            <h3 className={`${context.uiThemeContext.text} font-monospace p-2`}>
            <Typewriter
              options={{
                strings: [
                    `  useState  ` , 
                    `  useEffect  `,
                    `  useRef  ` , 
                    `  useContext  `
                ],
                autoStart: true,
                loop: true,
              }}
            />
           </h3>
            </div>
        </>
    )
}

