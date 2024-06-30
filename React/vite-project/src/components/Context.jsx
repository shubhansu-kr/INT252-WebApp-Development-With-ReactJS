import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const MyContext = createContext();

const ParentComponent = () => {
  const [value, setValue] = useState('Hello from Context');

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Value from context: {contextValue}</p>
      <GrandchildComponent />
    </div>
  );
};

const GrandchildComponent = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Value from context: {contextValue}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Context Example</h1>
      <ParentComponent />
    </div>
  );
};

export default App;
