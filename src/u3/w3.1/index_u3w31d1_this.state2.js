import React  from 'react'
import { render } from 'react-dom'
import Message from  './Component/MessageComponent'
import Name from  './Component/NameComponent'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello form props",
      name : "Ryan"
    };
  }
  
  render() {
    return (
      <div>
        <Message propsMessage={this.state.message}/>
        <Name propsMessage={this.state.name}/>
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