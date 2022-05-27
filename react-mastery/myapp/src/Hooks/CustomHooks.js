
import { useEffect } from "react"

/**
 * Local Storage ! use outside the function
 * @param : key , defaultVal = ''
 * @returns  => value , setValue 
 **/
export function useLocalStorage (key ) {
    
    function value () 
    {return JSON.parse(window.localStorage.getItem(key))}
    
    function setValue (value) 
    {window.localStorage.setItem(key , JSON.stringify(value))}

    return [ value , setValue ]
}
