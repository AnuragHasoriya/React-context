import React, { useContext } from 'react';
import { ContextCounter } from './ContextCounter';

export const Counter = () => {
  // Access the context value
  const { count, increment, decrement } = useContext(ContextCounter);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
