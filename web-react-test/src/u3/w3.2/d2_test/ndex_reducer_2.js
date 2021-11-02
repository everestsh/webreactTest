import React from "react";
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import {Provider, connect} from "react-redux"




function reducer(){
  return {
      user: {
        name: 'Dustin'
      },
      movies: [
        'Star Wars',
        'Lord of the Rings',
        'Harry Potter'
      ],
      todoList: [
        { task: 'Learn Redux', id: 0, completed: false }
      ],
      moviesToWatch: 13
    }
  
}
const store = createStore(reducer)

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