import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

import useGlobalContext from '../hooks/useGlobalContext';

const TodoList = () => {
  const { todos, getTodos } = useGlobalContext();

  useEffect(() => {
    // get all todos when when App mounts
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className='w-full max-w-screen-lg mx-auto px-2 cursor-pointer grid gap-4'>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

TodoList.defaultProps = {
  todos: []
};

TodoList.propTypes = {
  todos: PropTypes.array
};

export default TodoList;
