import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
  
    const [count,setCount] = useState(0) //current state is 0
    function Increment(){
        setCount(count+1)
        console.log(count)
        console.log("Increment by one");
    }
  return (
    <div className='Counter'>
        <span className='count'>{count}</span>
        <div>
            <button className='counterButton' onClick={Increment}>+1</button>
        </div>
    </div>
  )
}
