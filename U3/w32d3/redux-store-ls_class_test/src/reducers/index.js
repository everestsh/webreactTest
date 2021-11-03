

const initialState = {
    title: 'Title from Redux store'
  };

 function reducer(state = initialState, action) {
    console.log("reducer ",state)
    switch (action.type) {
        default:
          return state;
      }

}
export default reducer;

