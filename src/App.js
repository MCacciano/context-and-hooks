import React, { useContext, useEffect } from 'react';

import GlobalContext from './context/global';

import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.getTodos();
  }, []);

  return (
    <div>
      <div className='flex justify-center mb-4'>
        <h1 className='text-3xl font-medium'>Context and Hooks</h1>
      </div>
      <TodoList todos={globalContext.todos} />
    </div>
  );
};

export default App;
