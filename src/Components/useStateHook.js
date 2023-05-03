import { Button } from 'bootstrap';
import React , {useState} from 'react'

const UseStateHook = () => {
    const [count,setCount] = useState(0);
    const [text,settext] = useState('');

    function increaseHandling (){
      setCount(count+1)
    }
    function decreaseHandling (){
      setCount(count-1)
    }
    function changeInInput(e){
      settext(e.target.value);
    console.log(text);

    }
    // console.log(count);
  return (
    <div>
      <button onClick={increaseHandling}>+</button>
      <button onClick={decreaseHandling}>-</button>
      <label> {count}</label>

      <input value={text} onChange={changeInInput} type='text'/>
    </div>
  )
}

export default UseStateHook ;