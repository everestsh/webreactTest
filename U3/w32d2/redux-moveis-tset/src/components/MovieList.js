import Movie from "./Movie";
import {connect} from  'react-redux'
import {addMovie} from '../actions'
import { render } from "react-dom";
import React , { Component } from "react";
  
class  MovieList extends Component {
    state = {
        newMovie: ''
    };
    addMovie = e => {
        e.preventDefault();
        this.props.addMovie(this.state.newMovie)
    }

    handleChanges = e => this.setState({newMovie: e.target.value})
    render(){
        console.log("MovieList this.props= ",this.props)
        console.log("MovieList this.state= ",this.state)
        return (
        <div>
            <h2>User: {this.props.user.name}</h2>
            <p>Movies to watch: {this.props.moviesToWatch}</p>
            {
                this.props.movies.map((movie, key) => (
                    <Movie key={key.index} movie={movie}/>
                ))
            }
            <input 
            onChange={this.handleChanges}
            value={this.state.newMovie}
            />
            <button onClick={this.addMovie}>Add Movie</button>
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