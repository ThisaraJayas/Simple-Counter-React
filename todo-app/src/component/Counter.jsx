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
    function resetCounter(){
        setCount(0)
    }
    return(
        <>
        <span className='countParent'>{count}</span>
            <CounterButton by={1} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
            <CounterButton by={2} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
            <CounterButton by={5} incrementMethod={IncrementCounterParent} decrementMethod={DecrementCounterParent}/>
            <div>
            <button className='resetButton' onClick={resetCounter}>Reset</button>
            </div>
        </>
    )
}





function CounterButton({by, incrementMethod,decrementMethod}) {

    function Increment(){

        incrementMethod(by)
    }
    function Decrement(){

        decrementMethod(by)
    }
   
  return (
    <div className='Counter'>

        <div>
            <button className='counterButton' onClick={Increment}>+{by}</button>
        </div>
        <div>
            <button className='counterButton' onClick={Decrement}>-{by}</button>
        </div>
    </div>
  )
}


