import React, { useState } from "react";

const Checklist = () => {
	const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleCheckboxChange = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(
				selectedOptions.filter((item) => item !== option)
			);
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};
    
	return (
		<div className='checklist'>
			<h2>Select Options:</h2>
			{options.map((option, index) => (
				<div key={index}>
					<input
						type='checkbox'
						id={option}
						value={option}
						checked={selectedOptions.includes(option)}
						onChange={() => handleCheckboxChange(option)}
					/>
					<label htmlFor={option}>{option}</label>
				</div>
			))}
			<div className='selected-options'>
				<h3>Selected Options:</h3>
				{selectedOptions.length === 0 ? (
					<p>No options selected</p>
				) : (
					<ul>
						{selectedOptions.map((option, index) => (
							<li key={index}>{option}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

const App = () => {
	return (
		<div className='app'>
			<h1>Checklist Example</h1>
			<Checklist />
		</div>
	);
};

export default App;
