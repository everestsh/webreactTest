import React, { Component } from "react";
import { render } from 'react-dom'
import {people} from './u3/w3.1/d2_test/people';
// console.log("people:  === ", people)
class App extends Component {
  constructor() {
    console.log("constructor Invoked!" )
    super();
    this.state = {
      friends: people
    }
  }
  componentDidMount(){
    console.log("CDM Invoked!" )
    this.setState({friends:people})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Invoked!" )
    console.log('old props: ', prevProps);
    console.log('new props: ', this.props);

    console.log('old state: ', prevState);
    console.log('new state: ', this.state);
    // if (this.state.name !== prevState.name){
    //   console.log("Our state CHANGE !" )
    // }
  }

  
  render() {
    console.log("Render Invoked ")
    return (
      <div className="container">
        <h1> Welcome to Friends! </h1>
        {/* <p>
          The purpose of this follow along assignment is to give you access to
          more 'at bats' with ReactJS and to talk about the pieces of the{" "}
          <strong>React Component LifeCycle</strong> along the way.
        </p> */}
        {this.state.friends.map(friend => ( 
        <div key={friend.id}> {friend.first_name} </div>
        ))}
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