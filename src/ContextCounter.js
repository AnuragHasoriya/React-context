import React, { createContext, useState } from 'react';

// Create the context
const ContextCounter = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Value object contains the data and functions to be shared
  const value = {
    count,
    increment,
    decrement,
  };

  return (
    <ContextCounter.Provider value={value}>
      {children}
    </ContextCounter.Provider>
  );
};

export { ContextCounter, MyProvider };