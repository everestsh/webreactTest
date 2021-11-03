
export const ADD_MOVIE = "ADD_MOVIE";

export const addMovie = movieName => {
    console.log("Action addMovie", movieName);
    return ({
        type: ADD_MOVIE,
        payload: movieName
    })
}
