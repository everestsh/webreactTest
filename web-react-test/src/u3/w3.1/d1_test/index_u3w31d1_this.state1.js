import React  from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello form state",
      name : "Ryan"
    };
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}, My name is {this.state.name}</h1>
      </div>
    );
  }
}




const rootElement = document.getElementById("root");

render(
  //
  // React.createElement(App), 
  <App />,
  rootElement
  );