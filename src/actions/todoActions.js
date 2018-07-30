export const ADD_TODO_LIST = "ADD_TODO";

export const addTodo = list => ({
  type: ADD_TODO_LIST,
  payload: {
    list
  }
});
