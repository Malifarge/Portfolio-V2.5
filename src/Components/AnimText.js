/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react"

const AnimText = ({word1, word2})=>{
    const [letters1,setLetters1] = useState([])
    const [letters2,setLetters2] = useState([])

    useEffect(()=>{
        setLetters1(word1.split(""))
        if(word2){
            setLetters2(word2.split(""))
        }
    },[])

    return(
        <>
        {letters1.map((letter1,index)=>{
            return <span key={index}>{letter1}</span>

        })}
        <span> </span>
        {letters2.map((letter2,index)=>{
            return (<span key={index}>{letter2}</span>)
        })}
        </>
    )
    
}

export default AnimText