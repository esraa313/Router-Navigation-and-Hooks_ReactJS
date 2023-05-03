import React,{useEffect,useState} from 'react'

function UseEffectHook() {

    function Effectfunction(){
        console.log([count]);
    }
    const [count,setCount] = useState(0) ;


    useEffect( Effectfunction , [count]);


  return (
    <div>
        <button onClick={ ()=> setCount(count+1)}> + </button>
    </div>
  )
}

export default UseEffectHook ;