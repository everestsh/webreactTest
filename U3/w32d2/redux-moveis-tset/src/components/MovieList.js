import Movie from "./Movie";
import {connect} from  'react-redux'
import {addMovie} from '../actions'
import { render } from "react-dom";
import React , { Component } from "react";
  
class  MovieList extends Component {


    render(){
        console.log("MovieList = ",this.props)
        return (
        <div>
            <h2>User: {this.props.user.name}</h2>
            <p>Movies to watch: {this.props.moviesToWatch}</p>
            {
                this.props.movies.map((movie, key) => (
                    <Movie key={key.index} movie={movie}/>
                ))
            }
        </div>
        );
    }

}
  const mapStateToProps = state => {
      return {
        movies: state.movies,
        moviesToWatch: state.moviesToWatch,
        user: state.user
      }
  }

//   export default connect(null, {})(MovieList);
export default connect(
    mapStateToProps, 
    {addMovie})(MovieList);