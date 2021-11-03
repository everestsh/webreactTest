import { TOGGLE_TODO, ADD_ITEM } from "./../actions";

export const initialState = {
  todos: [
    { title: "todo 1", done: false, id: "1111" },
    { title: "todo 2", done: false, id: "2222" },
    { title: "todo 3", done: false, id: "3333" }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              done: !item.done
            };
          }
          return item;
        })
      };
    case ADD_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
            id: Date.now()+'',
            done: false
          }
        ]
      };
    default:
      return state;
  }
};

export default reducer;
