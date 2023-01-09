import React, { useState } from "react";
import "./App.css";
import Display from "./display";

function App(props) {
  //const [left, setLeft] = useState(0);
  //const [right, setRight] = useState(0);
  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    total: 0,
  });
  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
      total: counters.total + 1,
    });
  };
  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
      total: counters.total + 1,
    });
  };
  let [contadorValue, updateContador] = useState(1);
  const handleClick = () => {
    updateContador(contadorValue + 1);
  };
  const handleClickReset = () => {
    updateContador(0);
  };
  const isEven = contadorValue % 2 === 0;

  return (
    <div className="App">
      <Display contador={contadorValue}></Display>
      <small>{isEven ? "es par" : "es impar"}</small>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      <p>Click left: {counters.left}</p>
      <p>Click right: {counters.right}</p>
      <p>Total clicks: {counters.total} </p>
    </div>
  );
}

export default App;
