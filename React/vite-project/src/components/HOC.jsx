import React from 'react';

// Define a higher-order component (HOC)
const withBackgroundColor = (WrappedComponent, color) => {
  // Return a new functional component
  return (props) => {
    // Render the wrapped component with an added style prop
    return <WrappedComponent {...props} style={{ backgroundColor: color }} />;
  };
};

// Create a simple component
const MyComponent = (props) => {
  return <div style={props.style}>Hello, I'm a modified component!</div>;
};

// Use the HOC to enhance MyComponent
const MyEnhancedComponent = withBackgroundColor(MyComponent, 'lightblue');

// export default MyEnhancedComponent;


import MyEnhancedComponent from './MyEnhancedComponent';

const App = () => {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <MyEnhancedComponent />
    </div>
  );
};

export default App;
