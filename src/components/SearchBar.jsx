import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

