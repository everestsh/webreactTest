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
    console.log("CDM Invoked start! " )
  // ######################################
  // function createCounter() {
  //   let counter = 0
  //   const myFunction = function() {
  //   counter = counter + 1
  //   return counter
  //   }
  //   return myFunction
  //   }
  //   const increment = createCounter()
  //   const c1 = increment()
  //   const c2 = increment()
  //   const c3 = increment()
  //   console.log('example increment', c2, c1, c3)
  // ######################################
  // let a = {}
  // let b = {value: '789'};
  // let c = {value: '012'};
  // a[b] = 123
  // a[c] = 456;
  
  // console.log(a[b] ); // 456
  // console.log('a',a ); // a { '[object Object]': 456 }
  // console.log(typeof(a)); // object
  // ######################################
    const myObj = {name : 'Ryan'}
    const newObj = myObj
    newObj.name = 'Gilroy'
    console.log(myObj); {name: 'Gilroy'}
    console.log(newObj)
    newObj

    this.setState({friends:people})
    console.log("CDM Invoked end!" )
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