import React, { useState } from 'react';

const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Sum: ${sum}`);
  };

  return (
    <div>
      <h2>Add Numbers</h2>
      <input
        type="text"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleNum2Change}
      />
      <button onClick={handleAddition}>Add Numbers</button>
      {result && <p>{result}</p>}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Add Numbers Example</h1>
      <AddNumbers />
    </div>
  );
};

export default App;
