import { connect } from "react-redux";

import TodoListUI from "./todoListUI";
import { addTodo } from "../actions/todoActions";

const mapStateToProps = state => {
  return {
    todoList: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoList: list => dispatch(addTodo(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListUI);
