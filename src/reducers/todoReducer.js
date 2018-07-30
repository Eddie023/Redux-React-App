import { ADD_TODO_LIST } from "../actions/todoActions";

const INITIAL_STATE = {
  list: []
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      console.log(state);
      return {
        ...state,
        list: action.payload.list
      };

    default:
      return state;
  }
};

export default todoReducer;
