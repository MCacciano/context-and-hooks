import React from 'react';

import useGlobalContext from '../hooks/useGlobalContext';

const AddTodo = props => {
  const { title, addTodo, setTitle } = useGlobalContext();

  const handleOnClick = () => {
    if (title === '') return;

    addTodo(title);
    setTitle('');
  };

  return (
    <div className='flex justify-center my-5 gap-2'>
      <input
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='border border-gray-500 px-2'
        {...props}
      />
      <button
        onClick={handleOnClick}
        className='rounded bg-blue-700 text-white font-semibold py-1 px-2'
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
