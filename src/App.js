import React from 'react';

import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => (
  <>
    <div className='flex justify-center mb-4'>
      <h1 className='text-3xl font-medium'>Context and Hooks</h1>
    </div>
    <AddTodo />
    <TodoList />
  </>
);

export default App;
