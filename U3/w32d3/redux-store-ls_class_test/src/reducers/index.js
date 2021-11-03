

const initialState = {
    title: 'Title from Redux store'
  };

 function reducer(state = initialState, action) {
    console.log("reducer ",state)
    return state;

}
export default reducer;

