
import  {useContext} from 'react'
import { themeContext } from '../Style/Theme'

function HooksBtn ({context , text}) {
    return (
        <>
           <button className={`btn btn-md m-2 ${context.uiThemeContext.bg === 'bg-dark' ? 'btn-outline-dark ' : ''}`}>{text}</button>
        </>
    )
}

const Hooks = ['useState' , 'useEffect' , 'useContext' , 'useReducer' , 'useMemo']

export default function HooksRoute () {

    const context = useContext(themeContext)
    
    return (
        <> 
        <div className={`container ${context.uiThemeContext.bg} mt-5 p-2 text-center w-100`}>
             <div className={`d-flex justify-content-center justify-content-md-around justify-content-sm-between p-2 flex-wrap ${context.uiThemeContext.bg}`}>
                { Hooks && Hooks.map(text => <HooksBtn context={context} text = {text}/>)}
             </div>
        </div></>
    )
} 