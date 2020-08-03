import React from 'react';
import PropTypes from 'prop-types';

import useGlobalContext from '../hooks/useGlobalContext';

const TodoListItem = ({ todo }) => {
  const { deleteTodo, done, setDone } = useGlobalContext(todo);

  return (
    <li
      className={`flex justify-between border-2 border-${
        done ? 'green-700' : 'red-700'
      } shadow rounded p-4`}
      onClick={() => setDone(!done)}
    >
      <p className={`py-1 select-none ${done ? 'line-through' : ''}`}>{todo.title}</p>
      {done ? (
        <button
          onClick={() => deleteTodo(todo.id)}
          className='rounded bg-red-700 text-white font-semibold py-1 px-2'
        >
          Delete
        </button>
      ) : null}
    </li>
  );
};

TodoListItem.defaultProps = {
  todo: {}
};

TodoListItem.propTypes = {
  todo: PropTypes.object
};

export default TodoListItem;
