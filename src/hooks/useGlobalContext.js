import { useContext, useState } from 'react';

import GlobalContext from '../context/global';

// by creating a custom hook to use the GlobalContext we don't have to import
// GlobalContext.js as well as { useContext } from 'react'
const useGlobalContext = (todo = {}) => {
  const globalContext = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [done, setDone] = useState(todo.completed || false);

  return { ...globalContext, title, done, setTitle, setDone };
};

export default useGlobalContext;
