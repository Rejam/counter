import React from "react";
import "./css/App.css";

const App = ({ value, onDecrement, onIncrement }) => (
  <div className="App">
    <h1>Counter App</h1>
    <p>{value}</p>
    <button name="DECREMENT" onClick={onDecrement}>
      -
    </button>
    <button name="INCREMENT" onClick={onIncrement}>
      +
    </button>
  </div>
);

export default App;
