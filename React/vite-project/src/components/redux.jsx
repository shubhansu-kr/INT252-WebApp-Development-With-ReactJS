import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Reducer function to manage state
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Action creators
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Create Redux store
const store = createStore(counterReducer);

// Counter component
const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  count: state,
});

// Map dispatch to props
const mapDispatchToProps = {
  increment,
  decrement,
};

// Connect CounterComponent to Redux store
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// App component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <ConnectedCounter />
      </div>
    </Provider>
  );
};

export default App;
