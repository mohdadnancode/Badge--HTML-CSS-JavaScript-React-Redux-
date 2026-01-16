import React, { useState } from 'react'
import "./App.css"

const Counter = () => {

    const [count, setCount] = useState(0);

    // function handleInc(e) {
        
    // }
    // function handleDec(e) {

    // }
    // function handleReset(e) {

    // }
  return (
    <div className='con'>
        <h1>Counter App</h1>
        <p>{count}</p>
         <div class="button-group">
        <button className='btn1' onClick={() => setCount(count + 1)}>Increment</button>
        <button className='btn2' onClick={() => setCount(count > 0? count - 1 : 0)}>Decrement</button>
        <button className='btn3' onClick={() => setCount(0)}>Reset</button>
         </div>
    </div>
  )
}

export default Counter