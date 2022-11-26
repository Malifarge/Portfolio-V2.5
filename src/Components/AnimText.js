/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"

const AnimText = ({text})=>{
    const [letters,setLetters] = useState([])

    useEffect(()=>{
        setLetters(text.split(""))
    },[])

    return(
        <>
        {letters.map((letter,index)=>{
            return <span key={index}>{letter}</span>

        })}
        </>
    )
    
}

export default AnimText