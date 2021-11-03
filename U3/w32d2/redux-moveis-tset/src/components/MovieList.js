import Movie from "./Movie";
import {connect} from  'react-redux'

const MovieList = (props) => {
    console.log("MovieList = ",props)
    return (
      <div>
        <h2>User: {props.user.name}</h2>
        <p>Movies to watch: {props.moviesToWatch}</p>
        {
            props.movies.map((movie, key) => (
                <Movie key={key.index} movie={movie}/>
            ))
        }
      </div>
    );
  }
  const mapStateToProps = state => {
      return {
        movies: state.movies,
        moviesToWatch: state.moviesToWatch,
        user: state.user
      }
  }
//   export default connect(null, {})(MovieList);
export default connect(mapStateToProps, {})(MovieList);