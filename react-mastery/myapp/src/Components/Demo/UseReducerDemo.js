
import react , { useReducer } from "react"

export default function UseReducerDemo () {
    function reducer (state , action) {
        console.log(state)
         switch(action.type) {
             case 'INC':
                 return state + 1
             case 'DEC' :
                 return state - 1
              default :
              return state
         }
    }

    // const [val , dispatch] = useReducer (reducer , defaultVal)
    // const [state, dispatch] = useReducer(reducer, initialArg, init)
    const [state , dispatch] = useReducer(reducer , 0)
    
    return (
        <>
            <h1 className={`text-center m-2 fw-bold`}>useReducer Demo</h1>
            <div className={`text-center p-5 m-5`}>
                 <h3 className={`text-center`}>{state}</h3>
                 <button className={`btn  m-2 fw-bold fw-4`} onClick= {()=> dispatch({type:'INC'})}>+</button>
                 <button className={`btn  m-2 fw-bold fw-4`} onClick= {()=> dispatch({type:'DEC'})}>-</button>
            </div>
        </>
    )
}