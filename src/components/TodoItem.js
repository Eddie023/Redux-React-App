import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ id, name }) => {
  return (
    <tr>
      <td> {id} </td>
      <td> {name}</td>
    </tr>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  isCompleted: PropTypes.bool
};

export default TodoItem;
