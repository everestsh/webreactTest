import React from "react";
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import {Provider} from "react-redux"

const store = createStore(reducer)


function reducer(){
  return {
    title: "Hello world! I'am in the Redux store!"
  }
}

function App(){
  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
  );