import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Accordion Example</h1>
      <Accordion
        title="Section 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Accordion
        title="Section 2"
        content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="Section 3"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default App;
