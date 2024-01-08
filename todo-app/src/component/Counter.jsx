import React, { useState } from 'react'
import './Counter.css'

export default  function Counter(){
    const [count,setCount] = useState(0)
    function IncrementCounterParent(by){
        setCount(count+by)
    }
    function DecrementCounterParent(by){
        setCount(count-by)
    }
    return(
        <>
        <span className='countParent'>{count}</span>
            <CounterButton by={1} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
            <CounterButton by={2} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
            <CounterButton by={5} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
        </>
    )
}
function CounterButton({by, incrementMethod,decrementMethod}) {
    const [count,setCount] = useState(0) //current state is 0
    function Increment(){
        setCount(count+by)
        incrementMethod(by)
    }
    function Decrement(){
        setCount(count-by)
        decrementMethod(by)
    }
  return (
    <div className='Counter'>
        <span className='count'>{count}</span>
        <div>
            <button className='counterButton' onClick={Increment}>+{by}</button>
        </div>
        <div>
            <button className='counterButton' onClick={Decrement}>-{by}</button>
        </div>
    </div>
  )
}


