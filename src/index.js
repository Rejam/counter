import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import counterReducer from "./redux/counterReducer";

const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <App
      value={store.getState()}
      onDecrement={() => store.dispatch({ type: "DEC" })}
      onIncrement={() => store.dispatch({ type: "INC" })}
    />,
    document.getElementById("root")
  );
};

registerServiceWorker();

store.subscribe(render);
render();
