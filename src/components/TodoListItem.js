import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo }) => {
  return (
    <li
      className={`border-2 border-${
        todo.completed ? 'green-700' : 'red-700'
      } shadow rounded p-4`}
    >
      <h2>{todo.userId}</h2>
    </li>
  );
};

TodoListItem.defaultProps = {
  todo: {},
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
};

export default TodoListItem;
