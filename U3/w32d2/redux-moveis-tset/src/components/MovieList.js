import Movie from "./Movie";

const MovieList = (props) => {
    return (
      <div>
        <h2>User: {props.user}</h2>
        <p>Movies to watch: {props.moviesToWatch}</p>
        {/* {
            props.movies.map(movie => (
                <Movie movie={movie}/>
            ))
        } */}
      </div>
    );
  }
  export default MovieList;