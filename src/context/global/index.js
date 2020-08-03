import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import { GET_TODOS, ADD_TODO, DELETE_TODO } from './types';

const INITIAL_STATE = {
  todos: []
};

const globalContextReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  // get all todos from jsonplaceholder api
  const getTodos = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
      dispatch({ type: GET_TODOS, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  // add a new custom todo
  const addTodo = title => {
    const newTodo = {
      title,
      completed: false
    };

    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  // delete todo by id
  const deleteTodo = id => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        addTodo,
        deleteTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
