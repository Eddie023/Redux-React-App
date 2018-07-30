import React from "react";

import TodoItem from "../components/TodoItem";
import fetchTodoData from "../services/todoService";

class TodoList extends React.Component {
  componentWillMount() {
    this.getData();
  }

  getData = async () => {
    const list = await fetchTodoData();
    this.props.addTodoList(list);
  };

  render() {
    console.log(this.props.todoList);
    return (
      <table>
        <tbody>
          <tr>
            <th> Id </th>

            <th> Name </th>
          </tr>
        </tbody>
        <tbody>
          {this.props.todoList.todo.list.map((todo, index) => (
            <TodoItem {...todo} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodoList;
