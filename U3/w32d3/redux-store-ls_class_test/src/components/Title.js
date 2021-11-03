import React from 'react';
import {connect} from 'react-redux'

class Title extends React.Component {



    render() {
        return (
        <div className="App">
            <h1>{this.props.title}</h1>
            
        </div>
        );
    }

  }
  const mapStateToProps = state =>{
      console.log("currentState", state)
      return {
        title: state.title
      }
  }
// export default Title;
export default connect(
    mapStateToProps, 
    {})(Title);
  