import React  from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSingleClickEvent = (e)=> {
    alert('Single Click Event Triggered');
  }
  handleDoublelickEvent = (e)=> {
    alert('Double Click Event Triggered');
  }
  handleMouseEnter = (e)=> {
    alert('Mouse Enter  Event Triggered');
  }
  handleMouseLeave = (e)=> {
    alert('Mouse Leave Event Triggered');
  }
  handleInputChange = (event)=> {
    console.log(event.target.value);
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleSingleClickEvent} >Single Click Handler</button>
        <button onDoubleClick={this.handleDoublelickEvent}>Double Click Handler</button>
        <div onMouseEnter={this.handleMouseEnter}>Mouse Enter</div>
        <div onMouseLeave={this.handleMouseLeave}>Mouse Leave</div>
        <input type="text" placeholder='change me' onChange={this.handleInputChange}/>
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