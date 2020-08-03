import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import { GET_TODOS } from './types';

const INITIAL_STATE = {
  todos: [],
};

const globalContextReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, INITIAL_STATE);

  const getTodos = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      );
      dispatch({ type: GET_TODOS, payload: data });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        getTodos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
