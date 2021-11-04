import React from 'react';
import {connect} from 'react-redux'
import { updateTitle } from '../actions';

class Title extends React.Component {
    state = {
      newTitleText: ''
    };

    handleChanges = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    updateTitle = e => {
       e.preventDefault();
       this.props.updateTitle(this.state.newTitleText);
    };


    render() {
        return (
        <div className="App">
            <h1>{this.props.title}</h1>


        <input
        type="text"
        name="newTitleText"
        value={this.state.newTitleText}
        onChange={this.handleChanges}
        />
        <button onClick={this.updateTitle}>Update title</button>
    
            
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
    {updateTitle})(Title);
  