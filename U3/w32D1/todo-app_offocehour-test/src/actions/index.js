export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_ITEM = "ADD_ITEM";

export const toggleItem = (id) => {
  return { type: TOGGLE_TODO, payload: id };
};

export const addItem = (title) => {
  return { type: ADD_ITEM, payload: title };
};
