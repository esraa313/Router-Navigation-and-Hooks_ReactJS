import React,{useEffect,useState,useRef, useContext} from 'react'
import { ColorContext } from './UseContextProvider';

function UseRefHook() {
    const value = useRef() ;
    const { data , changeData } = useContext(ColorContext) ;
const Focus=()=>{
value.current.focus();
changeData(value.current.value)
}  
return (
    <div>
        <input ref={value}/>
        <button onClick={Focus}>Focus</button>
    </div>
  )
}

export default UseRefHook ;