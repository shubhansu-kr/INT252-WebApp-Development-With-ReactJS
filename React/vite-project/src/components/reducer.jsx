import React, { useReducer } from 'react';

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('Invalid action');
  }
};

const CounterWithReducer = () => {
  // Initialize state using useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Event handler to dispatch increment action
  const incrementCount = () => {
    dispatch({ type: 'INCREMENT' });
  };

  // Event handler to dispatch decrement action
  const decrementCount = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h2>Counter using useReducer</h2>
      <p>Count: {state.count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default CounterWithReducer;
