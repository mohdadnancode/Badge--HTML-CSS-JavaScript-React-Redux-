import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [color, setColor] = useState("");


  return (
    <div>
      <div className="btn-con">
        <div className="red" onClick={() => setColor("red")}>Red</div>
        <div className="blue" onClick={() => setColor("blue")}>Blue</div>
        <div className="green" onClick={() => setColor("green")}>Green</div>
        <div className="orange" onClick={() => setColor("orange")}>Orange</div>
        <div className="gray" onClick={() => setColor("gray")}>Gray</div>
      </div>
      <div className="color-con" style={{background: color}}></div>
    </div>
  )
}

export default App