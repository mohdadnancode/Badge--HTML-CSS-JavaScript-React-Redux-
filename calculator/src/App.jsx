import React, { useState } from 'react'

const App = () => {

  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumber = (num) => {
    setCurrent(current + num);
  };

  const handleOperator = (op) => {
    if(current === "") return;
    setPrevious(current);
    setOperator(op);
    setCurrent("");
  };

  const claculate = () => {
    const a = Number(previous);
    const b = Number(current);
    let result = 0;

    if(operator === "+") result = a + b;
    if(operator === "-") result = a - b;
    if(operator === "*") result = a * b;
    if(operator === "/") result = b === 0? "Error" : a / b;

    setCurrent(result.toString());
    setPrevious("");
    setOperator("");
  };

  const clear = () => {
    setCurrent("");
    setPrevious("");
    setOperator("");
  };

  return (
    <div style={{width: 200, margin: "40px auto"}}>
      <input
        value={current || 0}
        readOnly
        style={{width: "100%", marginBottom: 10, textAlign: "right"}}
      />

      <div>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>
      </div>

      <div>
        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>
      </div>

      <div>
        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>
      </div>

      <div>
        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={claculate}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
      </div>

      <button onClick={clear} style={{width: "100%", marginTop: 5}}>Clear</button>

    </div>
  )
}

export default App