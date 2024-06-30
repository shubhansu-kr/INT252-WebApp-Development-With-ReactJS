import React, { useState } from 'react';

const SearchFilter = () => {
  const initialList = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grapes',
    'Honeydew',
    'Kiwi',
    'Lemon',
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(initialList);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);

    const filtered = initialList.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
