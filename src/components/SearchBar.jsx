import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center bg-white rounded-full shadow-lg p-2 w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 rounded-l-full outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;